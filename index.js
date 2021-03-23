const fetch = require('node-fetch')

const addressesInput = [
  {
    student_id: '10001',
    street_address: '2728 Lori Circle',
    city: 'Stillwater',
    state: 'OK',
    zip: '74075'
  },
  {
    student_id: '10002',
    street_address: '1472 Filbert St',
    unit: 'Apt 511',
    city: 'San Francisco',
    state: 'CA',
    zip: ' 94109'
  },
  {
    student_id: '10003',
    street_address: '443 California Street',
    city: 'San F',
    state: 'CA',
    zip: ''
  }
]

class AddressWorker {
  constructor ({ address }) {
    this.address = address
  }

  formatCensusUrl () {
    return `https://geocoding.geo.census.gov/geocoder/geographies/address?street=${this.address.street_address}&city=${this.address.city}&state=${this.address.state}&zip=${this.address.zip}&benchmark=Public_AR_Current&vintage=Current_Current&layers=14&format=json`
  }

  formatBlockCodeUrl ({ latitude, longitude }) {
    return `https://geo.fcc.gov/api/census/block/find?showall=true&format=json&latitude=${latitude}&longitude=${longitude}`
  }

  async geoCodeAddress () {
    const censusUrl = this.formatCensusUrl()
    let blockCode = null
    let censusCoordinatesResult = await fetch(censusUrl)

    try {
      // WRITE NEW CODE BELOW HERE
    } catch (e) {
    }

    // EDIT RETURN STATEMENT HERE
    return {
      ...this.address,
      latitude: null,
      longitude: null,
      block_code: blockCode
    }
  }
}

const expectedResult = [
  {
    ...addressesInput[0],
    latitude: 36.144314,
    longitude: -97.09227,
    block_code: '401190102004015'
  },
  {
    ...addressesInput[1],
    latitude: 37.79956,
    longitude: -122.423615,
    block_code: '060750102002009'
  },
  {
    ...addressesInput[2],
    latitude: null,
    longitude: null,
    block_code: null
  }
]

const runAddressWorker = async () => {
  let geoCodedAddresses = []
  // CODE TO GEOCODE ADDRESSES GOES HERE
  // Hint: syntax to use AddressWorker: new AddressWorker({ address }).geoCodeAddress()

  const areArraysEqual = arraysEqual(geoCodedAddresses, expectedResult)
  console.log('formattedStudents matches expected result?:', areArraysEqual)
}

runAddressWorker()

// helper function below, please ignore
function arraysEqual (a1, a2) {
  return JSON.stringify(a1) === JSON.stringify(a2)
}
