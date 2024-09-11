# README of Data

> **Note** This describes the data of the cycle highways. For the website see [**README.md**](/README.md) at root directory.

[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)

## Attribution & License

Please attribute the data like this:

> © [FixMyCity](https://fixmycity.de)/[RSV-Dossier](https://github.com/FixMyBerlin/rsv-dossier) - [ODbL License](https://opendatacommons.org/licenses/odbl/summary/index.html)

The data, therefore `meta` and `geometries` folder, are both licensed under ODbL. See the [LICENSE](./LICENSE) for the full legal text.

## Data

The [`meta/meta.json`](./meta/meta.json) is a combined file, for all cycle highways. It collects not-structured data and information.

The individual `geojson` files in the `src/content/geometries` folder are individual. They're containing solely the geodata for one cycle highway.

The both datasets are matched through the filename of the `geojson` and the `id` in the meta file.

### State

A cycle highway MUST have one of the following states, segments CAN have one of the following state:

1. `idea` - Politically discussed and not agreed, planning has not started
2. `agreement_process` - It is in political discussion if planning of the cycle highway will be executed. The pilot study is finished, but planning has not been started
3. `planning` - the highway is in one of the planning phases, except `pilot_study`
4. `in_progress` - The segments have different planning phases, but as a whole it marches on
5. `done` - The cycle highway part is built, finished and ready for usage

### Stakeholders & Roles

Every organization / institution CAN be part of the `stakeholders` attribute. Every stakeholder MUST have a role. Since `stakeholders` and `roles` are an array, there can be multiple stakeholder holding the same role. Stakeholders are also available in _Detail segments_.

**Example:**

```jsonc
"stakeholders": [
    {
        "name": "Regionalverband Ruhr",
        "roles": ["communication"],
        "description": "RVR Ruhr ist zuständig für die Kommunikationsstrategie & -durchführung",
    },
]
```

Available roles are: `"communication"`, `"authority"` and `"construction_company"`

The **`detail_level`** describes in which accuracy the geometry is available in the GeoJSON. It MUST be one of the values: `exact`, `approximated`, `corridor`. The `rough` value is an alias of `approximated`.

## Geometry Data

Corresponding to the Meta JSON file, the _GeoJSON_ file contains the geometry of the cycle highways.

### Planning Phases

Since this repository should represent build phases of the cycle highways, these are the planning phases used exclusively in this order:

1. Pilot study [`pilot`]
2. Preliminary planning [`preliminary`]
3. Design planning [`design`]
4. Approval procedure [`approval`]
5. Execution planning [`execution`]

Planning phases are assigned through attribute `planning_phase`. The attribute is empty, when the cycle highway is finished. For example a cycle highway in _approval procedure_ SHOULD be assigned in the segments like this:

If needed, the planning phase can be further described with the attribute `description:planning_phase`. It MUST contain a `string`, which is usually a text, describing any details.

When the whole cycle highway get's discarded, the planning phase it stuck and SHOULD still be part of the cycle highway.

### Variants

Usually in the early planning phases there are multiple possible variants of the cycle highway. The `variant` attribute is an enum and describes whether the geometry is part of the currently preferred variant `"Vorzugstrasse"` or an alternative `"Alternative"`.

The **`discarded`** property describes that a variant was a considered variant previously, but is discarded now. The geometry therefore stays in the GeoJSON. In contrast to the `discarded` key in the MetaJSON, this value only represents the state of one individual variant. Usually from time to time more and more variants get discarded till one preferred is found.
We do not show discarded variants in the maps.

### JSON Schema

> You can use the [JSON Schema for MetaJSON](schema/meta.schema.json) for validation.

For a human-readable documentation, you can generate an HTML file using [json-schema-for-humans](https://pypi.org/project/json-schema-for-humans/).

Install first: `pip install json-schema-for-humans`
Then run

```sh
generate-schema-doc schema/meta.schema.json schema/
```

## See more

- [Explanation of Radschnellweg](https://de.wikipedia.org/wiki/Radschnellweg) in German Wikipedia
- [List of Radschnellwege](https://de.wikipedia.org/wiki/Liste_der_Radschnellverbindungen_in_Deutschland) in German Wikipedia
- [Explanation of Cycle Highways](https://cyclehighways.eu/about/what-is-a-cycle-highway.html) in CHIPS EU Project
