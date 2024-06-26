import { defineStore } from "pinia"

export const useStore = defineStore('main', {
  state: () => ({
    assetList: [
      {
        AssetID: 'V001',
        AssetName: 'Delivery Van',
        Category: 'Vehicle',
        Status: 'Active',
        ModelNumber: 'VD2000',
        SerialNumber: 'SN1234567890',
        Description: 'Ford Transit 2021',
        PurchaseCost: 450000000,
        PurchaseDate: '2021-06-15',
        VendorName: 'Ford Motors'
      },
      {
        AssetID: 'V002',
        AssetName: 'Forklift Truck',
        Category: 'Vehicle',
        Status: 'Inactive',
        ModelNumber: 'FT400',
        SerialNumber: 'SN9876543210',
        Description: 'Toyota Forklift 2020',
        PurchaseCost: 375000000,
        PurchaseDate: '2020-10-22',
        VendorName: 'Toyota Industries'
      },
      {
        AssetID: 'T001',
        AssetName: 'Heavy-Duty Tire',
        Category: 'Tire',
        Status: 'Active',
        ModelNumber: 'HT500',
        SerialNumber: 'SN5678901234',
        Description: 'Bridgestone Mud Terrain',
        PurchaseCost: 5000000,
        PurchaseDate: '2023-03-05',
        VendorName: 'Bridgestone Tires'
      },
      {
        AssetID: 'T002',
        AssetName: 'All-Season Tire Set',
        Category: 'Tire',
        Status: 'Active',
        ModelNumber: 'AS400',
        SerialNumber: 'SN2345678901',
        Description: 'Michelin CrossClimate+',
        PurchaseCost: 6750000,
        PurchaseDate: '2022-08-12',
        VendorName: 'Michelin Tires'
      },
      {
        AssetID: 'V003',
        AssetName: 'SUV',
        Category: 'Vehicle',
        Status: 'Active',
        ModelNumber: 'SUV2022',
        SerialNumber: 'SN1122334455',
        Description: 'Honda CR-V 2022',
        PurchaseCost: 520000000,
        PurchaseDate: '2022-04-30',
        VendorName: 'Honda Motors'
      },
      {
        AssetID: 'V004',
        AssetName: 'Truck',
        Category: 'Vehicle',
        Status: 'Active',
        ModelNumber: 'TRK3000',
        SerialNumber: 'SN9988776655',
        Description:'IsuzuNPRTruck',
        PurchaseCost:820000000,
        PurchaseDate:'2023-01-10',
        VendorName:'IsuzuMotors'
      },
      {
        AssetID:'T003',
        AssetName:'PerformanceTire',
        Category:'Tire',
        Status:'Active',
        ModelNumber:'PT700',
        SerialNumber:'SN8765432109',
        Description:'GoodyearEagleF1',
        PurchaseCost:8000000,
        PurchaseDate:'2021-11-25',
        VendorName:'GoodyearTires'
      },
      {
        AssetID:'T004',
        AssetName:'WinterTireSet',
        Category:'Tire',
        Status:'Active',
        ModelNumber:'WT300',
        SerialNumber:'SN5432109876',
        Description:'PirelliWinterSottozero',
        PurchaseCost:6000000,
        PurchaseDate:'2023-06-18',
        VendorName:'PirelliTires'
      }
    ]
  })
})
