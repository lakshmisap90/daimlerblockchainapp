import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, cargo: '000fd83982', status:'Vehicle produced',
      ETA : '21-May-2018',
      BIL : '934983',
        child : [{
          id:1.1,
          title : 'Mercedes Benz G',
          status :  'Vehicle produced',
          color : 'designo mocha black metallic',
          vin : 'WDDZF0FB8JA376882'
        },
        {
          id:1.2,
          title : 'Mercedes Benz',
          status :  'Vehicle produced',
          color : 'designo mocha black metallic',
          vin : 'WDDZF0FB8JA3382001'
        }]
      },
      { id: 2, cargo: '000fd83475', status:'Vehicle Exit Port of Departure', vin:'WDDZF0FB8JA376882' ,
      ETA : '30-June-2018',
      BIL : '937822173',
        child :  [{
          id:2.1,
          title : 'Mercedes Benz G',
          status :  'Vehicle Exit Port of Departure',
          color : 'Color: designo mocha black metallic',
          vin : 'WDDZF0FB8JA376882'
        },
        {
          id:2.2,
          title : 'Mercedes Benz',
          status :  'Vehicle Exit Port of Departure',
          color : 'Color: designo mocha black metallic',
          vin : 'WDDZF0FB8JA376882'
        }]
      },
      { id: 3, cargo: '000fd89637', status:'Pay Duty for the vehicle', vin:'WDDZF0FB8JA376882' ,
      ETA : '17-May-2018',
      BIL : '93762485',
        child : [{
          id:3.1,
          title : 'Mercedes Benz G',
          status :  'Pay Duty for the vehicle',
          color : 'Color: designo mocha black metallic',
        },
        {
          id:3.2,
          title : 'Mercedes Benz',
          status :  'Pay Duty for the vehicle',
          color : 'Color: designo mocha black metallic'
        }]
      },
      { id: 4, cargo: '000fd88877', status:'Vehicle on Vessel', vin:'WDDZF0FB8JA376882' ,
      ETA : '27-May-2018',
      BIL : '93762485',
      child : [{
        id:4.1,
        title : 'Mercedes Benz G',
        status :  'Vehicle on Vessel',
        color : 'Color: designo mocha black metallic'
      },
      {
        id:4.2,
        title : 'Mercedes Benz',
        status :  'Vehicle on Vessel',
        color : 'Color: designo mocha black metallic',
      }]
      },
      { id: 5, cargo: '000fd88241', status:'Vehicle Arrived at Storage', vin:'WDDZF0FB8JA376882',
      ETA : '25-May-2018',
      BIL : '93762485',
      child : [{
        id:5.1,
        title : 'Mercedes Benz G',
        status :  'Vehicle Goods Receipt',
        color : 'Color: designo mocha black metallic'
      },
      {
        id:5.2,
        title : 'Mercedes Benz',
        status :  'Vehicle Goods Receipt',
        color : 'Color: designo mocha black metallic'
      }]
    },
    { id: 6, cargo: '0008c82a82', status:'Vehicle Exit Port of Departure', vin:'WDDZF0FB8JA376882',
    ETA : '28-June-2018',
    BIL : '47382742',
    child : [{
      id:6.1,
      title : 'Mercedes Benz G',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    },
    {
      id:6.2,
      title : 'Mercedes Benz',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    }]
  },
    { id: 7, cargo: '0003e3e1f78', status:'Vehicle Goods Receipt', vin:'WDDZF0FB8JA376882',
    ETA : '28-Oct-2018',
    BIL : '47382742',
    child : [{
      id:7.1,
      title : 'Mercedes Benz G',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    },
    {
      id:7.2,
      title : 'Mercedes Benz',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    }]},
    { id: 8, cargo: '0001c690789', status:'Vehicle received at VPC - Start work', vin:'WDDZF0FB868776882',
    ETA : '14-June-2018',
    BIL : '47382742',
    child : [{
      id:8.1,
      title : 'Mercedes Benz G',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    },
    {
      id:8.2,
      title : 'Mercedes Benz',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    }]},
    { id: 9, cargo: '000882a82', status:'Vehicle Goods Receipt', vin:'WDDZF0FB8JA376882',
    ETA : '13-June-2018',
    BIL : '3213111',
    child : [{
      id:9.1,
      title : 'Mercedes Benz G',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    },
    {
      id:9.2,
      title : 'Mercedes Benz',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    }]},
    { id: 10, cargo: '000e0a60098', status:'VPC Complete- Status Update', vin:'WDDZF0FB8JA376882',
    ETA : '8-June-2018',
    BIL : '3213111',
    child : [{
      id:10.1,
      title : 'Mercedes Benz G',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    },
    {
      id:10.2,
      title : 'Mercedes Benz',
      status :  'Vehicle Goods Receipt',
      color : 'Color: designo mocha black metallic'
    }]
   }
    ];
    return {heroes};
  }
}
