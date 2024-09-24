# OSSVerse-Buyer-App

## Description

OSSVerse-Buyer-App acts as a business layer between the storefront ui and the bap protocol server.

## Pre-requisites

1. Install Docker and Docker compose
2. Set up a firebase account and copy the firebase configurations to `OSSVerse-Buyer-App/src/resources/firebase_config_dev.json` and to `OSSVerse-Buyer-App/src/resources/firebase_config_prod.json`

## Installation

### Using docker

1. Open the terminal.
2. Clone this repo.
   
       git clone https://github.com/OSSVerse/OSSVerse-Buyer-App

4. Move into the dir

       cd OSSVerse-Buyer-App

5. Run the docker-compose

       docker-compose up --build

After this step, the app will be up and running.

## Using the postman collections

1. Download the [postman collection](./OSSVerse-Buyer-App.postman_collection.json)
2. Open Postman.
3. Import the collection from the downloaded location.


## License

Nest is [MIT licensed](LICENSE).
