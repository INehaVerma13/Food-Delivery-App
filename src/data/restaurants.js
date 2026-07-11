export const RESTAURANTS = [
  {
    id: "rest-1",
    name: "Spice Symphony",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
    cuisines: ["North Indian", "Biryani", "Mughlai", "Kebabs"],
    rating: 4.5,
    deliveryTime: 25,
    distance: "1.8 km",
    costForTwo: 400,
    isVeg: false,
    isPromoted: true,
    address: "Sector 18, Noida",
    offer: "50% OFF up to ₹100",
    menu: [
      {
        id: "m-101",
        name: "Butter Chicken Classic",
        price: 280,
        description: "Tender tandoori chicken cooked in a rich, creamy, and mildly sweet tomato gravy.",
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-102",
        name: "Paneer Butter Masala",
        price: 240,
        description: "Soft cottage cheese cubes cooked in a rich, creamy tomato gravy with Indian spices.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-103",
        name: "Garlic Naan",
        price: 60,
        description: "Soft tandoori leavened flatbread topped with minced garlic and butter.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-104",
        name: "Chicken Dum Biryani",
        price: 320,
        description: "Aromatic basmati rice layered with spiced chicken, caramelized onions, and fresh herbs, slow-cooked in dum style.",
        isVeg: false,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-105",
        name: "Dal Makhani",
        price: 210,
        description: "Creamy slow-cooked black lentils enriched with butter and cream.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-106",
        name: "Tandoori Chicken (Half)",
        price: 260,
        description: "Chicken marinated in yogurt and spices, roasted in a traditional clay oven.",
        isVeg: false,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-107",
        name: "Tandoori Roti",
        price: 30,
        description: "Whole wheat unleavened flatbread baked in the clay oven.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-108",
        name: "Jeera Rice",
        price: 130,
        description: "Aromatic basmati rice tempered with cumin seeds and fresh coriander.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-109",
        name: "Chicken Tikka Masala",
        price: 290,
        description: "Roasted chicken chunks cooked in a spicy, orange-colored creamy tomato and onion sauce.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-110",
        name: "Gulab Jamun (2 Pcs)",
        price: 60,
        description: "Soft milk-solid balls dipped in a warm cardamom-flavored sugar syrup.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-2",
    name: "The Green Plate",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Healthy Food", "Salads", "South Indian", "Juices"],
    rating: 4.7,
    deliveryTime: 20,
    distance: "1.2 km",
    costForTwo: 300,
    isVeg: true,
    isPromoted: false,
    address: "Koramangala 5th Block, Bangalore",
    offer: "Flat ₹50 OFF on orders above ₹200",
    menu: [
      {
        id: "m-201",
        name: "Avocado Quinoa Salad",
        price: 180,
        description: "Fresh quinoa tossed with avocado chunks, cherry tomatoes, cucumbers, and a zesty lemon vinaigrette.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-202",
        name: "Masala Dosa Classic",
        price: 90,
        description: "Crispy rice and lentil crepe stuffed with spiced potato mash, served with sambar and fresh coconut chutney.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-203",
        name: "Cold Pressed Orange Juice",
        price: 120,
        description: "100% fresh orange juice with no added sugar or preservatives.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-204",
        name: "Idli Sambar Platter (3 Pcs)",
        price: 70,
        description: "Steamed fluffy rice cakes served with hot lentil sambar and tomato chutney.",
        isVeg: true,
        isBestseller: false,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-205",
        name: "Greek Feta Salad",
        price: 160,
        description: "Cucumbers, tomatoes, red onions, olives, and feta cheese dressed in olive oil and oregano.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-206",
        name: "Detox Green Juice",
        price: 110,
        description: "Fresh blend of spinach, cucumber, green apple, mint, and lemon juice.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1610970881699-44a5587caaec?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-207",
        name: "Onion Rava Dosa",
        price: 110,
        description: "Crispy semolina-based crepe loaded with chopped onions and green chillies.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-208",
        name: "Fruit Salad with Honey",
        price: 140,
        description: "Seasonal cut fruits drizzled with pure honey and black salt.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-209",
        name: "Medhu Vada (2 Pcs)",
        price: 60,
        description: "Crispy fried lentil fritters served with chutney and sambar.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-210",
        name: "Carrot Beet Juice",
        price: 100,
        description: "Nutritious blend of fresh carrot, beetroot, and ginger.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-3",
    name: "Little Italy",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Italian", "Pizza", "Pasta", "Salads"],
    rating: 4.4,
    deliveryTime: 35,
    distance: "3.2 km",
    costForTwo: 600,
    isVeg: false,
    isPromoted: true,
    address: "Connaught Place, New Delhi",
    offer: "Buy 1 Get 1 Free on Select Pizzas",
    menu: [
      {
        id: "m-301",
        name: "Margherita Basil Pizza",
        price: 320,
        description: "Classic hand-tossed crust with rich tomato sauce, fresh mozzarella cheese, and sweet basil leaves.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-302",
        name: "Spaghetti Carbonara",
        price: 360,
        description: "Creamy egg and parmesan sauce tossed with smoked bacon and freshly ground black pepper.",
        isVeg: false,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-303",
        name: "Penne Alfredo with Mushrooms",
        price: 340,
        description: "Penne pasta in a rich butter, garlic, and parmesan cream sauce loaded with sautéed mushrooms.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-304",
        name: "Tiramisu Delight",
        price: 180,
        description: "Traditional Italian dessert layered with coffee-dipped ladyfingers, mascarpone cream, and cocoa powder.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-305",
        name: "Garden Fresh Veggie Pizza",
        price: 380,
        description: "Mozzarella cheese, capsicum, sweet corn, mushrooms, olives, and onions.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-306",
        name: "Bruschetta Pomodoro (4 Pcs)",
        price: 150,
        description: "Garlic toasted Italian bread topped with diced tomatoes, garlic, extra virgin olive oil, and basil.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-307",
        name: "Arancini Rice Balls",
        price: 210,
        description: "Crispy, deep-fried Sicilian rice balls stuffed with cheese and herbs, served with marinara dip.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-308",
        name: "Pesto Genovese Pasta",
        price: 340,
        description: "Fusilli pasta tossed in a vibrant fresh basil, pine nut, parmesan, and olive oil pesto sauce.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-309",
        name: "Pepperoni Passion Pizza",
        price: 450,
        description: "Thick crust loaded with spicy pork pepperoni slice and double mozzarella cheese.",
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-310",
        name: "Panna Cotta Raspberry",
        price: 160,
        description: "Creamy vanilla cooked cream set dessert served with tart raspberry coulis.",
        isVeg: true,
        isBestseller: false,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-311",
        name: "Lasagna Al Forno Veg",
        price: 380,
        description: "Baked layers of pasta sheets, fresh spinach, creamy ricotta, mozzarella, and signature marinara sauce.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-312",
        name: "Chicken Parmesan Spaghetti",
        price: 420,
        description: "Crispy breaded chicken breast fillet topped with warm tomato sauce and melted cheese over spaghetti.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-313",
        name: "Mushroom Risotto Premium",
        price: 390,
        description: "Rich and creamy Arborio rice slow-cooked with fresh button mushrooms, white wine, garlic, and parmesan.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-314",
        name: "Italian Caesar Salad",
        price: 190,
        description: "Crisp romaine lettuce hearts tossed in creamy garlic dressing with golden croutons and parmesan ribbons.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-315",
        name: "Garlic Bread Mozzarella (4 Pcs)",
        price: 130,
        description: "Slices of crispy baguette spread with garlic herb butter and loaded with melted mozzarella.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-316",
        name: "Traditional Minestrone Soup",
        price: 140,
        description: "Hearty vegetable broth packed with beans, carrots, celery, zucchini, and tiny ditalini pasta.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-4",
    name: "Dragon Wok",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Chinese", "Asian", "Noodles", "Momos"],
    rating: 4.2,
    deliveryTime: 30,
    distance: "2.5 km",
    costForTwo: 350,
    isVeg: false,
    isPromoted: false,
    address: "Salt Lake, Kolkata",
    offer: "20% OFF on all orders",
    menu: [
      {
        id: "m-401",
        name: "Schezwan Hakka Noodles",
        price: 180,
        description: "Stir-fried noodles with fresh vegetables in a fiery house Schezwan sauce.",
        isVeg: true,
        isBestseller: true,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-402",
        name: "Chilli Chicken Dry",
        price: 220,
        description: "Crispy chicken chunks tossed with bell peppers, onions, green chillies, and soy-garlic sauce.",
        isVeg: false,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-403",
        name: "Pan Fried Veg Momos (6 Pcs)",
        price: 140,
        description: "Delectable vegetable-stuffed dumplings pan-fried to golden perfection, served with spicy red chutney.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-404",
        name: "Sweet Corn Soup",
        price: 100,
        description: "Classic creamy soup with crushed sweet corn and finely chopped vegetables.",
        isVeg: true,
        isBestseller: false,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-405",
        name: "Kung Pao Chicken",
        price: 240,
        description: "Sautéed chicken cubes with peanuts, bell peppers, and dried red chillies in a savory-sweet glaze.",
        isVeg: false,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-406",
        name: "Veg Spring Rolls (4 Pcs)",
        price: 120,
        description: "Crispy wrappers packed with julienned vegetables and glass noodles, served with sweet chilli sauce.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-407",
        name: "Manchurian Gravy Veg",
        price: 180,
        description: "Deep fried vegetable balls cooked in a tangy, thick soy-garlic Manchurian gravy.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-408",
        name: "Manchow Soup Chicken",
        price: 120,
        description: "Spicy and sour chicken soup loaded with garlic, ginger, and served with crispy fried noodles.",
        isVeg: false,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-409",
        name: "Chicken Steamed Momos (6 Pcs)",
        price: 160,
        description: "Classic steamed dumplings stuffed with minced spiced chicken, served with hot dip.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-410",
        name: "Darsaan with Ice Cream",
        price: 140,
        description: "Crispy fried honey noodles sprinkled with sesame seeds, served with a scoop of vanilla ice cream.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-5",
    name: "Burger Bistro",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Burgers", "Fast Food", "Fries", "Beverages"],
    rating: 4.6,
    deliveryTime: 18,
    distance: "0.9 km",
    costForTwo: 250,
    isVeg: false,
    isPromoted: true,
    address: "Bandra West, Mumbai",
    offer: "Free Peri Peri Fries on orders above ₹300",
    menu: [
      {
        id: "m-501",
        name: "Double Cheese Gourmet Burger",
        price: 190,
        description: "Flame-grilled juicy beef patty with double cheddar cheese, fresh lettuce, gherkins, and house burger sauce.",
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-502",
        name: "Crispy Aloo Tikki Burger",
        price: 80,
        description: "Spiced potato patty fried to a crunch, layered with sweet mayo, onion rings, and tomatoes.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-503",
        name: "Peri Peri Salted Fries",
        price: 110,
        description: "Golden crispy potato fries dusted with a spicy, tangy African Peri Peri seasoning mix.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-504",
        name: "Oreo Mudshake",
        price: 140,
        description: "Rich, thick milk shake blended with vanilla ice cream, milk, and chocolatey Oreo crumbs.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-505",
        name: "Crunchy Chicken Slider (2 Pcs)",
        price: 160,
        description: "Two mini chicken burgers with coleslaw and honey mustard glaze.",
        isVeg: false,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-506",
        name: "Cheesy Fries Basket",
        price: 130,
        description: "Thick salted french fries smothered in warm liquid yellow cheddar cheese sauce.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-507",
        name: "Spicy Paneer Lava Burger",
        price: 170,
        description: "Crispy crumbed paneer patty oozing melted cheese, topped with hot sriracha mayo.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-508",
        name: "Crispy Chicken Nuggets (8 Pcs)",
        price: 150,
        description: "Golden fried seasoned chicken bites served with smokey BBQ dipping sauce.",
        isVeg: false,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-509",
        name: "Cold Brew Coffee",
        price: 120,
        description: "Slow-steeped sweet black coffee served chilled over ice.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-510",
        name: "Chocolate Lava Cake",
        price: 90,
        description: "Mini warm chocolate cake with a soft liquid gooey chocolate center.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-511",
        name: "Smokey Bacon BBQ Burger",
        price: 230,
        description: "Juicy flame-grilled patty loaded with crispy bacon strips, cheddar cheese, and signature dark BBQ sauce.",
        isVeg: false,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-512",
        name: "Crispy Veg Snacker Burger",
        price: 90,
        description: "Golden fried vegetable patty layered with crisp cabbage slaw and tangy sandwich spread.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-513",
        name: "Jalapeno Cheese Poppers (6 Pcs)",
        price: 120,
        description: "Fiery green jalapeno pods stuffed with soft cream cheese, crumb-coated and deep fried.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-514",
        name: "Strawberry Cream Milkshake",
        price: 130,
        description: "Creamy thick shake blended with sweet hill strawberries, vanilla scoop, and whole milk.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-515",
        name: "Chicken Club Toast Sandwich",
        price: 180,
        description: "Three layered toasted sandwich packed with shredded roasted chicken, fried egg, lettuce, and tomatoes.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-516",
        name: "Golden Onion Rings Basket",
        price: 100,
        description: "Beer-battered giant onion rings fried to an extra-crispy crunch, served with spicy mayo.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-6",
    name: "Sweet Treats & Waffles",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Desserts", "Waffles", "Ice Cream", "Cakes"],
    rating: 4.8,
    deliveryTime: 22,
    distance: "2.1 km",
    costForTwo: 300,
    isVeg: true,
    isPromoted: false,
    address: "Park Street, Kolkata",
    offer: "Flat 10% OFF on gourmet cakes",
    menu: [
      {
        id: "m-601",
        name: "Belgian Chocolate Waffle",
        price: 150,
        description: "Crispy freshly-baked waffle base drizzled with rich, warm Belgian milk chocolate, topped with chocolate chips.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-602",
        name: "Death By Chocolate Cake Slice",
        price: 160,
        description: "Decadent multi-layered chocolate sponge loaded with chocolate fudge, chocolate chips, and ganache coating.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-603",
        name: "Sizzling Brownie with Ice Cream",
        price: 190,
        description: "Hot fudge walnut chocolate brownie placed on a sizzler plate, topped with vanilla scoop and hot chocolate sauce.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-604",
        name: "Fresh Strawberry Waffle",
        price: 170,
        description: "Classic waffle loaded with sliced fresh mountain strawberries, whipped cream, and wild berry compote.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-605",
        name: "Red Velvet Sundae",
        price: 150,
        description: "Red velvet cake crumbles layered with rich cream cheese ice cream and white chocolate sauce.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-606",
        name: "Nutella Waffle Cone",
        price: 130,
        description: "Crunchy waffle cone loaded with hazelnut Nutella spread and roasted almonds.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-607",
        name: "Mango Mania Ice Cream",
        price: 110,
        description: "Two scoops of fresh Alphonso mango pulp churned cream ice cream.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-608",
        name: "Blueberry Cheesecake Cup",
        price: 170,
        description: "Individual jar dessert with biscuit base, smooth cream cheese layer, and sweet blueberry topping.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-609",
        name: "Vanilla Bean Classic Shake",
        price: 120,
        description: "Thick creamy shake made from authentic Madagascar vanilla beans and fresh whole milk.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-610",
        name: "Hot Fudge Choco Sundae",
        price: 140,
        description: "Vanilla and chocolate ice cream layered with chocolate fudge sauce and roasted cashew nuts.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-7",
    name: "Dakshin Delight",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=60",
    cuisines: ["South Indian", "Dosa", "Idli", "Vada"],
    rating: 4.5,
    deliveryTime: 15,
    distance: "1.5 km",
    costForTwo: 200,
    isVeg: true,
    isPromoted: false,
    address: "Indiranagar, Bangalore",
    offer: "Flat 15% OFF on Dosas",
    menu: [
      {
        id: "m-701",
        name: "Butter Ghee Roast Dosa",
        price: 110,
        description: "Super thin and crispy dosa roasted with pure cow ghee and golden butter, served with sambar.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-702",
        name: "Mysore Masala Dosa",
        price: 120,
        description: "Spicy red garlic chutney spread inside a crispy dosa filled with mashed potato masala.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-703",
        name: "Rava Onion Masala Dosa",
        price: 130,
        description: "Lacy semolina crepe stuffed with potato masala and topped with caramelized red onions.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-704",
        name: "Mini Ghee Podi Idlis (10 Pcs)",
        price: 90,
        description: "Bite-sized soft button idlis tossed in hot clarified butter and homemade gun powder spices.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-705",
        name: "Medu Vada Sambar (2 Pcs)",
        price: 70,
        description: "Savoury lentil fritters soaked in hot and sour lentil curry.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-706",
        name: "Curd Rice Classic",
        price: 90,
        description: "Soft rice mixed with premium thick yogurt, tempered with mustard seeds, curry leaves, and green chillies.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-707",
        name: "Lemon Rice Zesty",
        price: 100,
        description: "Tangy rice preparation flavored with lemon juice, turmeric, roasted peanuts, and red chillies.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-708",
        name: "Rava Kesari Sweet",
        price: 80,
        description: "Warm semolina sweet pudding cooked with ghee, sugar, saffron, and loaded with roasted cashews.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-709",
        name: "Filter Coffee Authentic",
        price: 50,
        description: "Freshly brewed chicory coffee froth-mixed with boiled milk in standard brass tumbler.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-710",
        name: "Onion Uttapam (2 Pcs)",
        price: 100,
        description: "Thick savory rice pancakes topped with finely chopped onions, green chillies, and cilantro.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-711",
        name: "Ghee Podi Masala Dosa",
        price: 130,
        description: "Crispy rice crepe layered with homemade gun powder spice and potato mash, roasted in fresh clarified butter.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-712",
        name: "Spongy Set Dosa Platter (3 Pcs)",
        price: 100,
        description: "Fluffy, thick, and small rice pancakes served with mixed vegetable Saagu curry and coconut chutney.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-713",
        name: "Tomato Onion Uttapam Platter",
        price: 110,
        description: "Thick rice and lentil pancakes topped with fresh chopped tomatoes, onions, green chillies, and curry leaves.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-714",
        name: "Traditional Sweet Pongal",
        price: 80,
        description: "Rich dessert made from new harvest rice, yellow moong dal, jaggery, cardamom, and ghee-fried cashews.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-715",
        name: "Zesty Pineapple Kesari Halwa",
        price: 90,
        description: "Aromatic golden semolina pudding loaded with sweet pineapple chunks and roasted dry fruits.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-716",
        name: "Rava Idli Sambar Platter (2 Pcs)",
        price: 80,
        description: "Steamed semolina cakes spiced with mustard seeds, curry leaves, and cashews, served with hot sambar.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-8",
    name: "Punjab Rasoi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=60",
    cuisines: ["North Indian", "Paneer", "Naan", "Thali"],
    rating: 4.6,
    deliveryTime: 24,
    distance: "2.0 km",
    costForTwo: 350,
    isVeg: true,
    isPromoted: true,
    address: "Preet Vihar, Delhi",
    offer: "Flat ₹75 OFF on orders above ₹400",
    menu: [
      {
        id: "m-801",
        name: "Kadhai Paneer Special",
        price: 250,
        description: "Paneer cubes sautéed with capsicum, tomatoes, and ground spices in an iron wok.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-802",
        name: "Amritsari Kulcha Platter",
        price: 180,
        description: "Crumbly potato-stuffed baked bread served with spiced chickpea curry (Chole) and tamarind onion chutney.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-803",
        name: "Butter Naan Layered",
        price: 55,
        description: "Multi-layered tandoori wheat bread brushed generously with pure butter.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-804",
        name: "Dal Tadka Yellow",
        price: 170,
        description: "Yellow pigeon peas tempered with cumin, garlic, dry red chillies, and clarified butter.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-805",
        name: "Malai Kofta Creamy",
        price: 260,
        description: "Soft potato and paneer balls cooked in a rich, velvety cashew nut and onion curry gravy.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-806",
        name: "Tandoori Malai Chaap",
        price: 210,
        description: "Soya chaap chunks marinated in thick cream and mild spices, grilled to perfection.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-807",
        name: "Veg Pulao Deluxe",
        price: 150,
        description: "Steamed basmati rice cooked with mixed green vegetables and whole garam spices.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-808",
        name: "Boondi Raita Chilled",
        price: 80,
        description: "Whipped yogurt mixed with crispy chickpea flour droplets (boondi) and spices.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-809",
        name: "Sweet Lassi (Big Glass)",
        price: 90,
        description: "Thick churned yogurt drink sweetened with sugar, topped with cream and nuts.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-810",
        name: "Shahi Paneer Classic",
        price: 270,
        description: "Cottage cheese triangles cooked in a highly rich onion-cashew curry with dry fruits.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-9",
    name: "Keto & Co",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Healthy Food", "Salads", "Low Carb", "Wraps"],
    rating: 4.3,
    deliveryTime: 28,
    distance: "3.0 km",
    costForTwo: 450,
    isVeg: false,
    isPromoted: false,
    address: "Jubilee Hills, Hyderabad",
    offer: "Flat 20% OFF on Salad Bowls",
    menu: [
      {
        id: "m-901",
        name: "Caesar Salad Chicken",
        price: 220,
        description: "Crisp romaine lettuce, grilled chicken breast, boiled egg, grated parmesan, dressed in Caesar sauce.",
        isVeg: false,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-902",
        name: "Paneer Tikka Salad Wrap",
        price: 190,
        description: "Low-carb almond flour tortilla stuffed with grilled paneer, onions, bell peppers, and mint mayo.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-903",
        name: "Avocado Egg Mash Salad",
        price: 180,
        description: "Chunky avocado mashed with hard boiled eggs, seasoned with pepper, sea salt, and extra virgin olive oil.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-904",
        name: "Keto Almond Flour Roti (2 Pcs)",
        price: 80,
        description: "Pure gluten-free flatbreads baked from ground almond flour, perfect for low carb eaters.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-905",
        name: "Grilled Herb Breast Chicken",
        price: 260,
        description: "Boneless chicken breasts grilled with rosemary, garlic, and served with sautéed broccoli and squash.",
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-906",
        name: "Keto Cauliflower Fried Rice",
        price: 170,
        description: "Gritted cauliflower rice stir-fried with beans, carrots, scallions, and soy seasoning.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-907",
        name: "Mediterranean Hummus Bowl",
        price: 190,
        description: "Creamy chickpea hummus served with sliced cucumber, carrot sticks, cherry tomatoes, and olives.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-908",
        name: "Grilled Salmon Steak",
        price: 490,
        description: "Atlantic salmon steak grilled with butter-lemon-dill sauce, served alongside asparagus.",
        isVeg: false,
        isBestseller: false,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-909",
        name: "Sugar-Free Almond Muffin",
        price: 110,
        description: "Baked with almond meal and sweetened with calorie-free stevia, perfect sweet fix.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-910",
        name: "Matcha Sugar-Free Latte",
        price: 140,
        description: "Rich ceremonial Japanese green tea blend mixed with warm unsweetened almond milk.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-10",
    name: "The Royal Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Biryani", "Kebabs", "Mughlai"],
    rating: 4.5,
    deliveryTime: 30,
    distance: "2.8 km",
    costForTwo: 500,
    isVeg: false,
    isPromoted: true,
    address: "Gachibowli, Hyderabad",
    offer: "Flat 10% OFF on all Mughlai curries",
    menu: [
      {
        id: "m-1001",
        name: "Royal Mutton Dum Biryani",
        price: 390,
        description: "Fragrant basmati rice layered with succulent pieces of mutton, spices, saffron, slow-cooked in traditional clay pot.",
        isVeg: false,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1002",
        name: "Special Chicken Biryani",
        price: 310,
        description: "Classic Hyderabadi chicken biryani served with spicy Mirchi ka Salan and creamy yogurt Raita.",
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1003",
        name: "Galouti Kebab (4 Pcs)",
        price: 290,
        description: "Famous melt-in-mouth minced mutton patties spiced with exotic royal Punjab herbs.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1004",
        name: "Paneer Tikka Shaslik",
        price: 220,
        description: "Skewered cottage cheese cubes grilled with square onions, bell peppers, tomato, and spices.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1005",
        name: "Mughlai Chicken Korma",
        price: 320,
        description: "Chicken braised in rich, spiced sauce flavored with yogurt, paste cream, and cardamom.",
        isVeg: false,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1006",
        name: "Rumali Roti Classic",
        price: 40,
        description: "Super thin, handkerchief-like wheat flatbread cooked over flipped hot cast-iron dome.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1007",
        name: "Mirchi Ka Salan Side",
        price: 80,
        description: "Rich, tangy peanut and sesame curry containing whole fat green chillies, best biryani partner.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1008",
        name: "Saffron Double Ka Meetha",
        price: 110,
        description: "Delectable Hyderabadi bread pudding soaked in sweet condensed milk and saffron.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1009",
        name: "Royal Veg Dum Biryani",
        price: 240,
        description: "Aromatic basmati rice steamed layered with beans, carrots, cauliflower, paneer, and spices.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1010",
        name: "Chicken Reshmi Kebab (6 Pcs)",
        price: 270,
        description: "Super soft boneless chicken breasts cubes marinated in cream, yogurt, cashew paste, roasted in tandoor.",
        isVeg: false,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-11",
    name: "Wok & Roll",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Chinese", "Asian", "Momos"],
    rating: 4.1,
    deliveryTime: 26,
    distance: "2.2 km",
    costForTwo: 280,
    isVeg: false,
    isPromoted: false,
    address: "Kalyani Nagar, Pune",
    offer: "Flat 15% OFF on Momos",
    menu: [
      {
        id: "m-1101",
        name: "Chilli Garlic Fried Rice Veg",
        price: 160,
        description: "Stir-fried rice seasoned with pungent garlic chunks, spicy red chillies, and green scallions.",
        isVeg: true,
        isBestseller: true,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1102",
        name: "Sweet & Sour Fish Gravy",
        price: 290,
        description: "Crispy fried river fish fillets cooked in a sweet, tangy pineapple, tomato, and bell pepper glaze.",
        isVeg: false,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1103",
        name: "Crispy Honey Chili Potatoes",
        price: 140,
        description: "Fried potato fingers tossed in sticky sweet honey, hot red chilli sauce, and sesame seeds.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1104",
        name: "Vegetable Manchow Soup",
        price: 100,
        description: "Spicy dark brown ginger garlic soup with crushed veggies, topped with dry fried noodles.",
        isVeg: true,
        isBestseller: false,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1547592165-e1d17fed6005?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1105",
        name: "Paneer Chilli Dry Starter",
        price: 190,
        description: "Crispy paneer cubes tossed in spicy soy-chili sauce with diced capsicum and white onions.",
        isVeg: true,
        isBestseller: true,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1106",
        name: "Chicken Hakka Noodles",
        price: 190,
        description: "Boiled noodles wok-tossed with shredded chicken, mixed veggies, soy sauce, and white pepper.",
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1107",
        name: "Chicken Schezwan Dumplings (6 Pcs)",
        price: 170,
        description: "Steamed chicken momos tossed in highly spicy Schezwan paste and spring onions.",
        isVeg: false,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1108",
        name: "Crispy Vegetable Wontons (8 Pcs)",
        price: 120,
        description: "Golden fried wonton skins stuffed with chopped vegetables, served with dip.",
        isVeg: true,
        isBestseller: false,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1109",
        name: "Stir Fried Asian Greens",
        price: 150,
        description: "Bok choy, broccoli, snow peas, and button mushrooms sautéed in light sesame oil and garlic.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1110",
        name: "Chocolate Fried Wontons (4 Pcs)",
        price: 130,
        description: "Sweet wontons stuffed with milk chocolate ganache, fried crispy and dusted with powdered sugar.",
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      }
    ]
  },
  {
    id: "rest-12",
    name: "The Cocoa Lab",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=60",
    cuisines: ["Desserts", "Cakes", "Shakes"],
    rating: 4.7,
    deliveryTime: 20,
    distance: "1.6 km",
    costForTwo: 250,
    isVeg: true,
    isPromoted: false,
    address: "Salt Lake Sector 5, Kolkata",
    offer: "Flat 20% OFF on Gourmet Shakes",
    menu: [
      {
        id: "m-1201",
        name: "Dark Chocolate Truffle Cake (Half Kg)",
        price: 490,
        description: "Rich dark chocolate sponge layered with pure chocolate truffle ganache, very premium.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1202",
        name: "KitKat Crunch Shake",
        price: 150,
        description: "Thick milk shake blended with vanilla ice cream, KitKat bars, chocolate syrup, topped with KitKat chunks.",
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1203",
        name: "Red Velvet Cake Slice",
        price: 120,
        description: "Fluffy crimson cocoa sponge slice layered with sweet cream cheese frosting.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1204",
        name: "Lotus Biscoff Waffle",
        price: 160,
        description: "Baked waffle spread with smooth Lotus Biscoff paste, topped with crumbled Biscoff cookies.",
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1562376502-6f769499c886?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1205",
        name: "Classic Cold Coffee with Ice Cream",
        price: 130,
        description: "Rich whipped espresso milk shake topped with vanilla ice cream scoop.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1206",
        name: "White Chocolate Blondie",
        price: 90,
        description: "Rich buttery bar loaded with premium melted white chocolate chunks.",
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1207",
        name: "Double Chocolate Chip Cookie",
        price: 70,
        description: "Chewy soft-baked chocolate cookie packed with milk chocolate chips.",
        isVeg: true,
        isBestseller: false,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1208",
        name: "Strawberry Cream Shake",
        price: 140,
        description: "Fresh strawberry ice cream churned with whole milk and strawberry syrup.",
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1209",
        name: "Black Forest Pastry",
        price: 90,
        description: "Traditional chocolate sponge layered with white cream and sweet cherries, topped with chocolate flakes.",
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&auto=format&fit=crop&q=60"
      },
      {
        id: "m-1210",
        name: "Salted Caramel Brownie",
        price: 110,
        description: "Gooey chocolate fudge brownie topped with sea salt and home-cooked caramel drizzle.",
        isVeg: true,
        isBestseller: false,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=300&auto=format&fit=crop&q=60"
      }
    ]
  }
];

export const CUISINES_LIST = [
  "All",
  "North Indian",
  "South Indian",
  "Italian",
  "Chinese",
  "Burgers",
  "Healthy Food",
  "Desserts"
];
