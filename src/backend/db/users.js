import { v4 as uuid } from 'uuid'
import { formatDate } from '../utils/authUtils'
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: 'Adarsh',
    lastName: 'Balika',
    email: 'adarshbalika@gmail.com',
    password: 'adarshbalika',
    cart: [],
    wishlist: [],
    address: [
      {
        street: '22 Rue du Grenier Saint-Lazare',
        pinCode: '75003',
        city: 'Paris',
        state: 'Paris',
        text: '22 Rue du Grenier Saint-Lazare\n75003 Paris\nFrance',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser@test.com',
    password: 'Admin@321',
    cart: [],
    wishlist: [],
    address: [
      {
        street: '22 Rue du Grenier Saint-Lazare',
        pinCode: '75003',
        city: 'Paris',
        state: 'Paris',
        text: '22 Rue du Grenier Saint-Lazare\n75003 Paris\nFrance',
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
]
