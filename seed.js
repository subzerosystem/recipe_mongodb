const { connect } = require('./db');
const { ObjectId } = require('mongodb');
require('dotenv').config();

async function seed() {
    const db = await connect(process.env.MONGO_URI, '8103_recipe_book');  
    
    console.log('Seeding cuisines...');
    await db.collection('cuisines').insertMany([
        { _id: new ObjectId(), name: 'Chinese' },
        { _id: new ObjectId(), name: 'Italian' },
        { _id: new ObjectId(), name: 'Japanese' },
        { _id: new ObjectId(), name: 'Thai' },
        { _id: new ObjectId(), name: 'Indian' },
        { _id: new ObjectId(), name: 'Mexican' },
        { _id: new ObjectId(), name: 'French' },
        { _id: new ObjectId(), name: 'Korean' },
        { _id: new ObjectId(), name: 'Vietnamese' },
        { _id: new ObjectId(), name: 'American' }
    ]);
    
    console.log('Seeding tags...');
    await db.collection('tags').insertMany([
        { _id: new ObjectId(), name: 'easy' },
        { _id: new ObjectId(), name: 'quick' },
        { _id: new ObjectId(), name: 'healthy' },
        { _id: new ObjectId(), name: 'vegetarian' },
        { _id: new ObjectId(), name: 'vegan' },
        { _id: new ObjectId(), name: 'spicy' },
        { _id: new ObjectId(), name: 'comfort' },
        { _id: new ObjectId(), name: 'dinner' },
        { _id: new ObjectId(), name: 'lunch' },
        { _id: new ObjectId(), name: 'breakfast' },
        { _id: new ObjectId(), name: 'asian' },
        { _id: new ObjectId(), name: 'italian' }
    ]);
    
    console.log('✅ Seed data inserted successfully!');
    process.exit(0);
}

seed().catch(err => {
    console.error('❌ Error seeding:', err);
    process.exit(1);
});