# This script is originally coming from https://milovantomasevic.com/blog/stackoverflow/2021-04-21-convert-csv-to-json-file-in-python/ and was adapted

import csv
import json
import time
import argparse

parser = argparse.ArgumentParser(
    description="Convert a CSV containing cycle highways into a Meta JSON file. Specification for the Meta JSON can be found at https://github.com/FixMyBerlin/radschnellverbindungen"
)

parser.add_argument(
    "-r",
    "--region",
    help="Output only highways containing the string which is contained in the ref or Bundesland (case-insensitive)",
    default="all",
)
parser.add_argument(
    "-o",
    "--output",
    help="Define filename of meta json output",
    default="rsv_meta.json",
)
parser.add_argument(
    "-d",
    "--delimiter",
    help="Define delimiter of csv input",
    default="rsv_meta.json",
)

parser.add_argument("-i", "--input", help="Define path of csv input", default="rsv.csv")
args = parser.parse_args()


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    selected_regions = args.region.lower()
    selected_regions = selected_regions.split(" ")
    # read csv file
    with open(csvFilePath, encoding="utf-8") as csvf:
        # load csv file data using csv library's dictionary reader
        csvReader = list(csv.reader(csvf, delimiter=args.delimiter))
        csvKeys = csvReader[0]

        keyIndexMap = {csvKeys[i]: i for i in range(len(csvKeys))}
        # convert each csv row into python dict
        for row in list(csvReader):
            rowDict = {key: row[keyIndexMap[key]] for key in keyIndexMap}
            country = rowDict["Bundesland"].lower()
            if rowDict["GeoJSON"] == "ja" and (
                selected_regions == ["all"] or (country in selected_regions)
            ):
                ref = rowDict["Abk\u00fcrzung"].lower().replace(" ", "")
                rsv_properties = {
                    "id": f"{ref}-{country}",
                    "cost": rowDict["Kosten"],
                    "state": rowDict["Projektstand"],
                    # planning_phase: ""
                    # detail_level: ""
                }
                rsv_properties["finished"] = (
                    None
                    if rowDict["Fertigstellung"] == ""
                    else rowDict["Fertigstellung"]
                )
                rsv_properties["general"] = {
                    "ref": rowDict["Abkürzung"],
                    "name": rowDict["Titel"],
                    "from": rowDict["von"],
                    "to": rowDict["bis"],
                    "length": float(rowDict["Länge"]),
                    "description": None
                    if rowDict["(Kurzbeschreibung)"] == ""
                    else rowDict["(Kurzbeschreibung)"],
                    "source": None if rowDict["Quellen"] == "" else rowDict["Quellen"],
                    # "slug": ""
                }
                rsv_properties["stakeholders"] = [
                    {
                        "name": rowDict["Auftraggeber"],
                        "roles": ["authority"],
                        # "description": ""
                    }
                ]
                rsv_properties["references"] = {
                    "website": None
                    if rowDict["Projektwebsite"] == ""
                    else rowDict["Projektwebsite"],
                    # "osm_relation": ""
                }

                jsonArray.append(rsv_properties)

    # convert python jsonArray to JSON String and write to file
    with open(jsonFilePath, "w", encoding="utf-8") as jsonf:
        jsonString = json.dumps(jsonArray, indent=4)
        jsonf.write(jsonString)


start = time.perf_counter()
csv_to_json(args.input, args.output)
finish = time.perf_counter()

print(f"Conversion completed in {finish - start:0.4f} seconds")
