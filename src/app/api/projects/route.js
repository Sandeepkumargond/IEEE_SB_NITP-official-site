import {connectDB} from '@/lib/connectDB.js';
import {Projects} from '@/lib/models.js';

export async function GET(request) {
  try {
   
   // console.log('Collection name:', Projects.collection.name);
    

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '16'); // Default to 15
    if (isNaN(page) || isNaN(limit) || page < 1 || limit < 1) {
      throw new Error('Invalid page or limit parameters');
    }
    const skip = (page - 1) * limit;

    await connectDB();
    const projects = await Projects.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await Projects.countDocuments();
    console.log('Fetched', projects.length, 'projects, Total count:', total);
    return Response.json({ projects, total });
    
  } catch (error) {
    console.error('Error in /api/projects:', error);
    return Response.json({ error: `Failed to fetch projects: ${error.message}` }, { status: 500 });
  }
}