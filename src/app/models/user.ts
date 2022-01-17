export class User {
    id: number = 0
    name: string
    password: string
    phone: {
        number: number
        cityCode: number
        countryCode: number
    } 

  constructor() {
    this.id = 0
    this.name = ""
    this.password = ""
    this.phone = {
        number: 0,
        cityCode: 0,
        countryCode: 0
    }
  }
   
}
