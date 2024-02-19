<script lang="ts">
    import {
		SvelteGantt,
		SvelteGanttTable,
	} from 'svelte-gantt';

    import moment from 'moment';
    import { onMount } from 'svelte';
    let gantt;
    let ganttWidth = 0;

    const time = input => {
        return moment(input, 'HH:mm');
    };

    const currentStart = time('00:00');
    const currentEnd = time('23:59');
    onMount(() => {
        let ganttElement = document.getElementById('example-gantt');
        if (!ganttElement) return;

        gantt = new SvelteGantt({
            target: ganttElement,
            props: {
                rows: JSON.parse(`[{"id":0,"label":"18 อาทิตย์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":6},{"id":1,"label":"17 เสาร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":86},{"id":2,"label":"16 ศุกร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":166},{"id":3,"label":"15 พฤหัสบดี","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":246},{"id":4,"label":"14 พุธ","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":326},{"id":5,"label":"13 อังคาร","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":406},{"id":6,"label":"12 จันทร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":486},{"id":7,"label":"11 อาทิตย์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":566},{"id":8,"label":"10 เสาร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":646},{"id":9,"label":"09 ศุกร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":726},{"id":10,"label":"08 พฤหัสบดี","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":806},{"id":11,"label":"07 พุธ","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":886},{"id":12,"label":"06 อังคาร","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":966},{"id":13,"label":"05 จันทร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":1046},{"id":14,"label":"04 อาทิตย์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":1126},{"id":15,"label":"03 เสาร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":1206},{"id":16,"label":"02 ศุกร์","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":1286},{"id":17,"label":"01 พฤหัสบดี","imageSrc":"Content/joe.jpg","classes":[],"enableDragging":false,"y":1366}]
`),
                tasks: JSON.parse(
                    `[
    {
        "type": "task",
        "id": 0,
        "resourceId": 5,
        "html": "",
        "from": "2024-02-18T17:18:00.000Z",
        "to": "2024-02-19T16:59:00.000Z",
        "syncNextIndex": 2,
        "classes": [
            "delivered-right"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    },
    {
        "type": "task",
        "id": 1,
        "resourceId": 4,
        "html": "",
        "from": "2024-02-18T17:00:00.000Z",
        "to": "2024-02-19T16:59:00.000Z",
        "syncNextIndex": 1,
        "classes": [
            "delivered-left-right"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    },
    {
        "type": "task",
        "id": 2,
        "resourceId": 3,
        "html": "",
        "from": "2024-02-18T17:00:00.000Z",
        "to": "2024-02-19T05:46:00.000Z",
        "syncNextIndex": 0,
        "classes": [
            "delivered-left"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    },
    {
        "type": "task",
        "id": 3,
        "resourceId": 2,
        "html": "",
        "from": "2024-02-18T17:18:00.000Z",
        "to": "2024-02-19T16:59:00.000Z",
        "syncNextIndex": 2,
        "classes": [
            "in_transit-right"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    },
    {
        "type": "task",
        "id": 4,
        "resourceId": 1,
        "html": "",
        "from": "2024-02-18T17:00:00.000Z",
        "to": "2024-02-19T16:59:00.000Z",
        "syncNextIndex": 1,
        "classes": [
            "in_transit-left-right"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    },
    {
        "type": "task",
        "id": 5,
        "resourceId": 0,
        "html": "",
        "from": "2024-02-18T17:00:00.000Z",
        "to": "2024-02-19T05:46:00.000Z",
        "syncNextIndex": 0,
        "classes": [
            "in_transit-left"
        ],
        "amountDone": 0,
        "showButton": false,
        "buttonClasses": "",
        "buttonHtml": "",
        "enableDragging": true
    }
]`
                ),
                columnOffset: 15,
                magnetOffset: 15,
                rowHeight: 80,
                rowPadding: 15,
                columnUnit: 'hour',
                columnOffset: 1,
                headers: [{ unit: 'hour', format: 'H:mm' }],
                fitWidth: true,
                minWidth: ganttWidth,
                from: currentStart.valueOf(),
                to: currentEnd.valueOf(),
                tableHeaders: [{ title: '', property: 'label', width: 140, type: 'tree' }],
                tableWidth: 100,
                ganttTableModules: [SvelteGanttTable]
            }
        });

        window.gantt = gantt;
        gantt.rendorTasks();
    });
</script>

<div class="container">
    <div id="example-gantt"></div>
</div>

<style>
    #example-gantt {
        flex-grow: 1;
        overflow: auto;
    }
    .container {
        display: flex;
        overflow: auto;
        flex: 1;
    }
</style>
