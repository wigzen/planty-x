import { v4 as uuid } from 'uuid'

export const products = [
  {
    _id: uuid(),
    name: 'Sierra Needlegrass',
    price: 7.11,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1459162433446-35f351aa36d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwcm91dHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Eurhynchium Moss',
    price: 3.32,
    description:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1574626318228-c3689a84f980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Harrington's Beardtongue",
    price: 14.87,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1627347902083-edbcaa5c4286?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Black Apple',
    price: 10.1,
    description:
      'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1500420254515-0faefa2dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Burgess' Broomsage",
    price: 2.29,
    description:
      'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1555748842-8b6b8de0d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Coffee Cliffbrake',
    price: 14.73,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    category: 'flowers',
    src: 'https://images.unsplash.com/photo-1522439368130-c74c519afbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'European Milkvetch',
    price: 5.7,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1587997767711-f0a39f2bdc7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Witch's Hair Lichen",
    price: 2.9,
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1470364693235-a4fe27c60914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Whiteleaf Mountainmint',
    price: 7.54,
    description:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1551075649-8fdfd4c6f842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Tufted Alpine Saxifrage',
    price: 3.69,
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1467043198406-dc953a3defa0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Alaska Bluegrass',
    price: 10.0,
    description: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1569873175476-10aa45523ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Arthothelium Lichen',
    price: 10.74,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    category: 'flowers',
    src: 'https://images.unsplash.com/photo-1503153181849-4e4f85a341ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Wavyleaf Aster',
    price: 7.52,
    description:
      'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1632161286719-5afe9b5d954b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=745&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Vervain',
    price: 9.27,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1627899045097-e478157bb638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Byb3V0c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Wavyleaf Ceanothus',
    price: 12.59,
    description:
      'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1587884934488-2c4044f0596c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwcm91dHN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Clustered Dock',
    price: 4.46,
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1585214610352-75a1fbd961ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Redcedar',
    price: 14.37,
    description: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1587997767711-f0a39f2bdc7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvdHRlZCUyMGhlcmJzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Beadle Oak',
    price: 1.04,
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    category: 'sprouts',
    src: 'https://images.unsplash.com/photo-1640671511581-0cc93ea3ebf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Branched Porterweed',
    price: 6.54,
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    category: 'flowers',
    src: 'https://images.unsplash.com/photo-1444533045186-3d46ae6c5e50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Graceful Filmy Fern',
    price: 8.82,
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    category: 'sprouts',

    src: 'https://images.unsplash.com/photo-1647613233044-bb52d86f778d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Colombian Bluestem',
    price: 13.4,
    description:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
    category: 'cactus',
    src: 'https://plus.unsplash.com/premium_photo-1670344901637-7fe5e9431ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Smooth Solomon's Seal",
    price: 12.9,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1539176170444-67d6c8f356d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Narrowleaf Morning-glory',
    price: 9.26,
    description:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1606841610375-7cd2adbadded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxwb3R0ZWQlMjBoZXJic3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Trecul's Toothleaf",
    price: 11.2,
    description:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1531797611996-666aa1f3df08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvdHRlZCUyMGNhY3R1c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Schweinitz's Sunflower",
    price: 6.73,
    description:
      'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1594200416066-4c1655336363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxwb3R0ZWQlMjBoZXJic3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Poison Suckleya',
    price: 9.35,
    description: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1598803145150-2cb664cb8b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJvbnNhaXxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Lovegrass',
    price: 12.92,
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1615870728367-7b5b99e19136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHRlZCUyMGNhY3R1c3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Sweet Orange',
    price: 8.22,
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1517135399940-2855f5be7c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVyYnN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Ferntree',
    price: 9.05,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1607721098274-e54cbfab475d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlcmJzfGVufDB8MXwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Possumhaw',
    price: 3.94,
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
    category: 'herbs',
    src: 'https://images.unsplash.com/photo-1516705248460-57e157b6e703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Recurved Milkvetch',
    price: 6.2,
    description:
      'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1533230222401-f7109b57226e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Smooth Townsend Daisy',
    price: 1.66,
    description:
      'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Oblongleaf Snakeherb',
    price: 5.04,
    description:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1493834685523-df9beaf95762?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: "Meehan's Mint",
    price: 14.34,
    description:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    category: 'flowers',
    src: 'https://images.unsplash.com/photo-1617111490936-07b47eafdcd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=676&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Longbract Wild Indigo',
    price: 5.0,
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1519336056116-bc0f1771dec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Skeletonplant',
    price: 9.96,
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    category: 'flowers',
    src: 'https://images.unsplash.com/photo-1517263939804-a49ed35d8e8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Tawhiwhi',
    price: 3.83,
    description:
      'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    category: 'bonsai',
    src: 'https://images.unsplash.com/photo-1543258742-001eb2141837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Ebony Spleenwort',
    price: 8.09,
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Diverseleaf Small Limestone Moss',
    price: 9.79,
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1601491632947-a42911fa7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
  {
    _id: uuid(),
    name: 'Bearded Jewelflower',
    price: 3.66,
    description:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    category: 'cactus',
    src: 'https://images.unsplash.com/photo-1598475602592-1d521e53eb08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    ratings: `${Math.floor(Math.random() * (6 - 2)) + 2}`,
  },
]
