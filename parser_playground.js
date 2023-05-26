import { parse_expression_at, parse as parse_script } from "./src/compiler/parse/acorn.js";

import { strip_types } from "./src/compiler/parse/strip_types.js";
import {compile, parse} from "./src/compiler/index.js";
import { inspect } from "util";

const source = `import type { Foo } from 'bar';`;

function log (ast) {
    console.log(inspect(ast, { depth: null, colors: true }));
}

const ast = parse(`{#each items az item} {item} {/each}`);
// const ast = parse_expression_at(source, 0);
// const ast = parse_script(source, 0);

log(ast);