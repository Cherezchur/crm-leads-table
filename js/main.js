import { getTableItems } from "./table-items.js";
import { getFilters } from "./filter.js";
import { leadsInformation } from "./data.js";

getFilters();
getTableItems(leadsInformation);