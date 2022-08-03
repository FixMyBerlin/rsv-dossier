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
parser.add_argument("-i", "--input", help="Define path of csv input", default="rsv.csv")
args = parser.parse_args()


def csv_to_json(csvFilePath, jsonFilePath):
    jsonArray = []
    selected_regions = args.region.lower()
    selected_regions = selected_regions.split(" ")

    # read csv file
    with open(csvFilePath, encoding="utf-8") as csvf:
        # load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf)

        # convert each csv row into python dict
        for row in list(csvReader):
            country = row["Bundesland"].lower()
            if row["GeoJSON"] == "ja" and (
                selected_regions == ["all"] or (country in selected_regions)
            ):
                ref = row["Abk\u00fcrzung"].lower().replace(" ", "")

                rsv_properties = {
                    "id": f"{ref}-{country}",
                    "cost": row["Kosten"],
                    "state": row["Projektstand"],
                    # planning_phase: ""
                    # detail_level: ""
                }
                rsv_properties["finished"] = (
                    None if row["Fertigstellung"] == "" else row["Fertigstellung"]
                )
                rsv_properties["general"] = {
                    "ref": row["Abkürzung"],
                    "name": row["Titel"],
                    "from": row["von"],
                    "to": row["bis"],
                    "length": float(row["Länge"]),
                    "description": row["(Kurzbeschreibung)"],
                    "source": row["Quellen"],
                    # "slug": ""
                }
                rsv_properties["stakeholders"] = [
                    {
                        "name": row["Auftraggeber"],
                        "roles": ["authority"],
                        # "description": ""
                    }
                ]
                rsv_properties["references"] = {
                    "website": None
                    if row["Projektwebsite"] == ""
                    else row["Projektwebsite"],
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
