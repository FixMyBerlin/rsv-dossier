# This script is originally coming from https://milovantomasevic.com/blog/stackoverflow/2021-04-21-convert-csv-to-json-file-in-python/ and was adapted

import csv 
import json
import time
import argparse

parser = argparse.ArgumentParser(description='Convert a CSV containing cycle highways into a Meta JSON file. Specification for the Meta JSON can be found at https://github.com/FixMyBerlin/radschnellverbindungen')

parser.add_argument("-r", "--region", help="Output only highways containing the string which is contained in the ref or Bundesland (case-insensitive)", default="All regions")
parser.add_argument("-o", "--output", help="Define filename of meta json output", default="rsv_meta.json")

args = parser.parse_args()

def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    selected_region = args.region.lower()
      
    #read csv file
    with open(csvFilePath, encoding='utf-8') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        # Count RSV per state
        states = {}
        for row in list(csvReader):
            if row["Bundesland"] not in states:
                states[row["Bundesland"]] = 1
                # For counting when building rsv id
                states[row["Bundesland"]+"_count"] = 1
            else:
                states[row["Bundesland"]] += 1

        csvf.seek(0)
        #convert each csv row into python dict
        for row in list(csvReader)[1:]:
            rowCopy = {}
            if selected_region == "all regions" or (selected_region in row["Abk\u00fcrzung"].lower()) or (selected_region == row["Bundesland"].lower()):
                ref = row["Abk\u00fcrzung"].lower().replace(" ", "")
                if row["Abk\u00fcrzung"] and row["Bundesland"]:
                    rowCopy["id"] = row["Bundesland"].lower() + "_" + ref
                elif not row["Abk\u00fcrzung"] and row["Bundesland"]:
                    rowCopy["id"] = row["Bundesland"].lower() + "_" + str(states[row["Bundesland"]+"_count"]) 
                    states[row["Bundesland"]+"_count"] += 1
                else:
                    rowCopy["id"] = row["ID"]
                rowCopy["cost"] = row["Kosten"]
                rowCopy["finished"] = row["Fertigstellung"]
                rowCopy["state"] = row["Projektstand"]
                rowCopy["planning_phase"] = ""
                rowCopy["detail_level"] = ""
                rowCopy["general"] = {
                    "ref": row["Abkürzung"],
                    "name": row["Titel"],
                    "from": row["von"],
                    "to": row["bis"],
                    "description": row["(Kurzbeschreibung)"],
                    "slug": ""
                }
                rowCopy["stakeholders"] = [{
                    "name": row["Auftraggeber"],
                    "roles": ["authority"],
                    "description": ""
                }]
                rowCopy["references"] = {
                    "website": "",
                    "osm_relation": ""
                }
                
                jsonArray.append(rowCopy)
  
    #convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)
          
output_filename = args.output

csvFilePath = r'../data/list_rsv.csv'
jsonFilePath = r'../data/' + output_filename

start = time.perf_counter()
csv_to_json(csvFilePath, jsonFilePath)
finish = time.perf_counter()

print(f"Conversion completed in {finish - start:0.4f} seconds")