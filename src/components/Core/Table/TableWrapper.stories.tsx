/*eslint-disable*/
/*import TableStaticCol from './TableStaticCol';
import { actions } from 'fixtures/actions';
import TableWrapper from './TableWrapper';
import DateCell from './DateCell';
import { Icon } from '../Icon';

export default {
    title: 'TableWrapper',
    component: TableWrapper,
};

const Template = args => <TableWrapper {...args} />;

const headerRow = [
    { label: 'Table Static Col', sortable: false },
    {
        label: 'Publication Date', sortable: true, type: 'date', defaultSort: true,
    },
    { label: 'Test2', sortable: true },
    { label: 'Test3' },
    { label: 'Test4' },
    { label: 'Test5' },
];

const dateTable = [
    new Date(Date.now()),
    new Date(Date.now() - 3600000 * 25),
    new Date(Date.now() - 3600000 * 2),
    new Date(Date.now() - 3600000 * 90),
];

export const Default = Template.bind({});
Default.args = {
    id: 'test',
    header: headerRow,
    rows: [
        [
            { display: <div style={{ color: 'blue' }}>Row1</div>, value: 'Row1' },
            { display: dateTable[0].toLocaleString(), value: dateTable[0] },
            { display: 'Row1', value: 'Row1' },
            { display: 'Row1', value: 'Row1' },
            { display: 'Row1', value: 'Row1' },
            { display: 'Row1', value: 'Row1' },
        ],
        [
            { display: <div style={{ color: 'blue' }}>Row1</div>, value: 'Row1' },
            { display: dateTable[1].toLocaleString(), value: dateTable[1] },
            { display: 'qsdqsd', value: 'qsdqsd' },
            { display: 'qsdqsd', value: 'qsdqsd' },
            { display: 'qsdqsd', value: 'qsdqsd' },
            { display: 'qdsqsd', value: 'qsdqsd' },
        ],
        [
            { display: <div style={{ color: 'blue' }}>Row1</div>, value: 'Row1' },
            { display: 'azeaze', value: dateTable[2] },
            { display: 'Row2', value: 'Row2' },
            { display: 'azeaze', value: 'azeaze' },
            { display: 'Row1', value: 'Row1' },
            { display: 'Row1', value: 'Row1' },
        ],
        [
            { display: <div style={{ color: 'blue' }}>Row1</div>, value: 'Row1' },
            { display: dateTable[3].toLocaleString(), value: dateTable[3] },
            { display: 'ttttt', value: 'ttttt' },
            { display: 'Row1', value: 'Row1' },
            { display: 'fffff', value: 'fffff' },
            { display: 'Row1', value: 'Row1' },
        ],
    ],
    columnsWidth: [4, 2, 2, 2, 2, 2],
};

const images = [
    '788d15f6-8273-4423-a72f-709c2ba594c9-portrait.jpg?ts=1635539913000',
    '9aa87205-3dc7-4b5d-bbea-7f70246b3d93-square-auto.jpg?ts=1635833309000',
    'acd2de7a-2830-49eb-b32b-8751c7c89371-landscape-auto.jpg?ts=1635794039000',
    '22bd71fd-5aae-4a94-b4d0-fd42eef458db-square.jpg?ts=1635778594000',
    '1299a4ab-ad3b-49c7-af01-066ea0a31c94-portrait.jpg?ts=1635767533000',
    '6aaaad14-fb56-4e60-b5ef-90d797763455-portrait-auto.jpg?ts=1635527301000',
];

export const WithStaticBlock = Template.bind({});

const getPicture = n => `https://brut-storage-staging.storage.googleapis.com/thumbnail/${images[n]}`;

const tableStaticBlockProps = n => ({
    thumbnail: {
        ...thumbnail,
        image: getPicture(n),
        size: '80px',
    },
    actions,
    nbMaxActions: 3,
    id: `tableWrapper__${n}`,
    label: n === 0
        ? 'This is a very long label supposed to crop because it\'s a very long paragraph containing lots of words'
        : 'This is a label',
});

const getArray = size => new Array(size).fill('*');

const generateTable = (nbRows, nbCols) => getArray(nbRows).map((e, index) => getArray(nbCols).map((e2, indexCol) => {
    if (indexCol === 0) return { display: <TableStaticCol {...tableStaticBlockProps(index)} />, value: '' };
    if (indexCol === 1) return { display: <DateCell date={dateTable[index]}/>, value: dateTable[index] };
    if (indexCol === 3) {
        return {
            display: <Icon name={'phone'} family={'mdi'} />, value: '',
        };
    }
    return { display: `Row ${index + 1}, Col ${indexCol + 1}`, value: `Row ${index + 1}, Col ${indexCol + 1}` };
}));

WithStaticBlock.args = {
    id: 'testWithStaticCol',
    header: headerRow,
    rows: generateTable(4, 6),
    columnsWidth: [4, 1, 1, 1, 1, 1],
};
*/
