## The Instructions

### The Data
We have an array called `addressesInput` that contains student addresses with specific address components (the `unit` key is optional):

```
[
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
...
]
```

### The Task
For each student address, we need **geocode** it and produce a `latitude`, `longitude`, and a `block_code` (a US Census-defined area measurement) to ultimately find out which service providers can serve their address location. To obtain these values for an address, we make use of 2 **public APIs**.

We've provided a structure of an `AddressWorker` that contains a series of functions to geocode a given address with help from the API responses. We ask you to complete the code in `AddressWorker` and then call it for each of the addresses in `addressesInput`.

The expected output is structured the same as the input, but each address has 3 additional keys: `latitude`, `longitude` and `block_code`. If any ERRORS come back from the APIs, the values in the 3 additional fields should all be `null`:
```
[
  {
    student_id: '10001',
    street_address: '2728 Lori Circle',
    city: 'Stillwater',
    state: 'OK',
    zip: '74075',
    latitude: 36.144314,
    longitude: -97.09227,
    block_code: '401190102004015'
  },
...
,
{ // THIS ONE HAS ERRORS
    student_id: '10003',
    street_address: '443 California Street',
    city: 'San F',
    state: 'CA',
    zip: '',
    latitude: null,
    longitude: null,
    block_code: null
  }
]
```

## To run the code
`node index.js`
