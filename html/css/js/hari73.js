

// utils.js - Export
export const PI = 3.14159;
export function tambah(a, b) { return a + b; }
export default class Calculator { 123 }

// app.js - Import
import Calculator, { PI, tambah } from './utils.js';

// Rename import
import { tambah as add } from './utils.js';

// Import semua
import * as Utils from './utils.js';

// Di HTML:
<script type="module" src="app.js"></script>

