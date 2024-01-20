export enum AccountID {
  eCommerce_1 = "team_cjf5GBxz60sqHfs",
  eCommerce_2 = "team_xvHTilvNssRf7rw",
}

export interface Address {
  street: string;
  city: string;
  state: State;
  country: string;
  zip: string;
}

export enum Category {
  Automotive = "Automotive",
  Baby = "Baby",
  Beauty = "Beauty",
  Books = "Books",
  Clothing = "Clothing",
  Computers = "Computers",
  Electronics = "Electronics",
  Games = "Games",
  Garden = "Garden",
  Grocery = "Grocery",
  Health = "Health",
  Home = "Home",
  Industrial = "Industrial",
  Jewelery = "Jewelery",
  Kids = "Kids",
  Movies = "Movies",
  Music = "Music",
  Outdoors = "Outdoors",
  Shoes = "Shoes",
  Sports = "Sports",
  Tools = "Tools",
  Toys = "Toys",
}

export enum State {
  Alabama = "Alabama",
  Alaska = "Alaska",
  Arizona = "Arizona",
  Arkansas = "Arkansas",
  California = "California",
  Colorado = "Colorado",
  Connecticut = "Connecticut",
  Delaware = "Delaware",
  Florida = "Florida",
  Georgia = "Georgia",
  Hawaii = "Hawaii",
  Idaho = "Idaho",
  Illinois = "Illinois",
  Indiana = "Indiana",
  Iowa = "Iowa",
  Kansas = "Kansas",
  Kentucky = "Kentucky",
  Louisiana = "Louisiana",
  Maine = "Maine",
  Maryland = "Maryland",
  Massachusetts = "Massachusetts",
  Michigan = "Michigan",
  Minnesota = "Minnesota",
  Mississippi = "Mississippi",
  Missouri = "Missouri",
  Montana = "Montana",
  Nebraska = "Nebraska",
  Nevada = "Nevada",
  NewHampshire = "New Hampshire",
  NewJersey = "New Jersey",
  NewMexico = "New Mexico",
  NewYork = "New York",
  NorthCarolina = "North Carolina",
  NorthDakota = "North Dakota",
  Ohio = "Ohio",
  Oklahoma = "Oklahoma",
  Oregon = "Oregon",
  Pennsylvania = "Pennsylvania",
  RhodeIsland = "Rhode Island",
  SouthCarolina = "South Carolina",
  SouthDakota = "South Dakota",
  Tennessee = "Tennessee",
  Texas = "Texas",
  Utah = "Utah",
  Vermont = "Vermont",
  Virginia = "Virginia",
  Washington = "Washington",
  WestVirginia = "West Virginia",
  Wisconsin = "Wisconsin",
  Wyoming = "Wyoming",
}

export enum Currency {
    Mxn = "mxn",
    Usd = "usd",
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: Address;
}

export interface LineItem {
  name: string
  description: string
  price: string
  qty: number
  taxe_rate: number
  tax_included: boolean
  tax_factor: string
  tax_withholding: boolean
  tax_type: string
  category: Category
  sku: string
  product_key: string
  unit_code: string
  unit_key: string
  unit_name: string
}

export interface Payment {
  line_items: LineItem[];
  currency: Currency;
  customer: Customer;
  payment_method: PaymentMethod;
  status: string;
  notes: string;
  created_at: string;
  accountId: AccountID;
}

export enum PaymentMethod {
  Card = "card",
  Cash = "cash",
  Transfer = "transfer",
}
