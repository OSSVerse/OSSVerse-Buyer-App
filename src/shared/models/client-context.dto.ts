import { ApiProperty } from "@nestjs/swagger"
import { Domain } from "../../configs/api.config"

// {
//   "confirmRequestDto": [
//     {
//       "context": {
//         "transaction_id": "string",
//         "bpp_id": "string",
//         "bpp_uri": "string",
//         "bap_id": "string",
//         "bap_uri": "string",
//         "domain": "string",
//         "action": "string",
//         "version": "string",
//         "message_id": "string",
//         "timestamp": "string"
//       },
//       "message": {
//         "order": {
//           "provider": {
//             "locations": [
//               "string"
//             ],
//             "descriptor": {
//               "images": [
//                 "string"
//               ],
//               "name": "string"
//             },
//             "id": "string",
//             "categories": [
//               {
//                 "descriptor": {
//                   "name": "string"
//                 },
//                 "id": "string"
//               }
//             ]
//           },
//           "fulfillment": {
//             "customer": {
//               "person": {
//                 "name": "string"
//               },
//               "contact": {
//                 "phone": "string",
//                 "email": "string"
//               }
//             },
//             "id": "string"
//           },
//           "items": [
//             {
//               "id": "string",
//               "fulfilment_id": "string",
//               "provider": {
//                 "locations": [
//                   "string"
//                 ],
//                 "descriptor": {
//                   "images": [
//                     "string"
//                   ],
//                   "name": "string"
//                 },
//                 "id": "string",
//                 "categories": [
//                   {
//                     "descriptor": {
//                       "name": "string"
//                     },
//                     "id": "string"
//                   }
//                 ]
//               },
//               "quantity": {
//                 "id": "string",
//                 "quantity": "string"
//               },
//               "locations": [
//                 null
//               ]
//             }
//           ],
//           "billing": {
//             "address": {
//               "door": "string",
//               "country": "string",
//               "city": "string",
//               "area_code": "string",
//               "state": "string",
//               "building": "string",
//               "name": "string",
//               "locality": "string"
//             },
//             "phone": "string",
//             "name": "string",
//             "email": "string"
//           }
//         }
//       }
//     }
//   ],
//   "userId": "string"
// }

class City {
  @ApiProperty({
    example: 'Bangalore',
    type: String
  })
  name: string
  @ApiProperty({
    example: 'std:080',
    type: String
  })
  code: string
}

class Country {
  @ApiProperty({
    example: 'India',
    type: String
  })
  name: string
  @ApiProperty({
    example: 'IND',
    type: String
  })
  code: string
}

export class locationInfo {
  @ApiProperty({
    type: City
  })
  city: City
  @ApiProperty({
    type: Country
  })
  country: Country
}

export class ClientContext {
  @ApiProperty({
    example: 'Software Assurance',
    type: String
  })
  domain: Domain
  @ApiProperty({
    example: 'confirm',
    type: String
  })
  action: String
  @ApiProperty({
    example: '1.1.0',
    type: String
  })
  version: String
  @ApiProperty({
    example: 'ead489b8-81de-49a4-baf6-8d8de7eabf32',
    type: String
  })
  transaction_id?: string
  @ApiProperty({
    type: locationInfo
  })
  location?: locationInfo
  @ApiProperty({
    example: 'openfort-oasp.ossverse.com',
    type: String
  })
  bpp_id?: string
  @ApiProperty({
    example: 'http://openfort-oasp.ossverse.com',
    type: String
  })
  bpp_uri?: string
  @ApiProperty({
    example: 'bap.ossverse.com',
    description:'domain is required'
  })
  bap_id? :string
  @ApiProperty({
    example: 'http://bap.ossverse.com',
    type: String
  })
  bap_uri?: string
  @ApiProperty({
    example: '1d07c819-695c-44ab-bd47-c21678a6ba4e',
    type: String
  })
  message_id?: string
  @ApiProperty({
    example: '2023-10-09T04:46:28.012Z',
    type: String
  })
  timestamp?: string
}