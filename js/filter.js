import { getFilterAttribute, FILTERS } from "./utils.js";
import { getTableItems } from "./table-items.js";
import { leadsInformation } from "./data.js";

const filtersContainer = document.querySelector('.history-header__filters');
const filterTemplate = document.querySelector('#filter').content.querySelector('.filter');
const filterFragment = document.createDocumentFragment();

const getFilteredLeads = (id) => {
    let filteredLeads = [];
    leadsInformation.slice().forEach((lead) => {
        if(id === 'Call') {
            if(lead.communication.slice(lead.communication.length - 4) === id) {
                filteredLeads.push(lead);
            };
            return;
        } else if (lead.communication === id) {
            filteredLeads.push(lead);
        };
    })
    return filteredLeads;
}

const getFilters = () => {
    
    FILTERS.forEach((filter) => {
        const filterElement = filterTemplate.cloneNode(true);
        const filterLabel = filterElement.querySelector('label');
        const filterRadioButton = filterElement.querySelector('input');

        filterLabel.textContent = filter;
        filterLabel.setAttribute('for', getFilterAttribute(filter));
        filterRadioButton.setAttribute('id', getFilterAttribute(filter))

        filterRadioButton.addEventListener('click', (evt) => {

            if(evt.target.id === 'All') {
                getTableItems(leadsInformation);
                return;
            } 
            getTableItems(getFilteredLeads(evt.target.id));
        })

        filterFragment.appendChild(filterElement);
    })

    filterFragment.querySelector('#All').setAttribute('checked', 'checked')
    filtersContainer.appendChild(filterFragment);
}

export {getFilters};