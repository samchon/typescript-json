import TSON from "../../../src";
import { IObjectToJsonTuple } from "../../structures/ToJsonTuple";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_to_json_tuple = _test_stringify(
    "toJSON() method returning tuple type",
    IObjectToJsonTuple.generate(),
    (input) => TSON.stringify(input),
);
