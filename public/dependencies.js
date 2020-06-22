//import SvelteGantt from './Grid.svelte';
//import moment from "../node_modules/moment/src/moment.js";

function time(input) {
    return moment(input, 'HH:mm');
}
let startOfToday = moment().startOf('day');

const currentStart = time('06:00');
const currentEnd = time('18:00');

const dependencies = [];
const colors = ['blue', 'green', 'orange']

const data = {
    rows: [{
        "id": 1,
        "label": "Preparation and Planning"
    }, {
        "id": 2,
        "label": "Development"
    }, {
        "id": 3,
        "label": "Implementation"
    }, {
        "id": 4,
        "label": "Training"
    }, {
        "id": 5,
        "label": "Roll-out product"
    }],
    tasks: [{
        "id": 1,
        "resourceId": 1,
        "label": "Preparation",
        "from": time("7:00"),
        "to": time("9:00"),
        "classes": "orange"
    }, {
        "id": 2,
        "resourceId": 1,
        "label": "Planning",
        "from": time("9:30"),
        "to": time("11:00"),
        "classes": "orange"
    }, {
        "id": 3,
        "resourceId": 2,
        "label": "Development",
        "from": time("12:00"),
        "to": time("13:30"),
        "classes": "orange"
    }, {
        "id": 4,
        "resourceId": 3,
        "label": "Implementation",
        "from": time("13:45"),
        "to": time("15:45"),
        "classes": "orange"
    }, {
        "id": 5,
        "resourceId": 5,
        "label": "Finish",
        "from": time("17:00"),
        "to": time("17:45"),
        "classes": "green"
    }, {
        "id": 6,
        "resourceId": 4,
        "label": "Training",
        "from": time("7:00"),
        "to": time("10:00"),
        "classes": "blue"
    }],
    dependencies: [{
        id: 1,
        fromId: 1,
        toId: 2
    }, {
        id: 2,
        fromId: 2,
        toId: 3
    }, {
        id: 3,
        fromId: 3,
        toId: 4
    }, {
        id: 4,
        fromId: 4,
        toId: 5
    }, {
        id: 5,
        fromId: 6,
        toId: 5
    }]
};

let options = {
    rows: data.rows,
    tasks: data.tasks,
    dependencies: data.dependencies,
    headers: [{ unit: 'day', format: 'MMMM Do' }, { unit: 'hour', format: 'H:mm' }],
    fitWidth: true,
    from: currentStart,
    to: currentEnd,
    tableHeaders: [{ title: 'Label', property: 'label', width: 140 }],
    tableWidth: 240,
    ganttTableModules: [app.SvelteGanttTable],
    ganttBodyModules: [app.SvelteGanttDependencies]
}

var gantt = new app.SvelteGantt({ target: document.getElementById('example-gantt'), props: options });