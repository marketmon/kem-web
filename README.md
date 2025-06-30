# Resume Graph Visualization - Ethan Markwalter's Interactive Portfolio

A comprehensive 3D graph visualization of professional profile data with intelligent RAG (Retrieval-Augmented Generation) pipeline for interactive resume analysis. This system represents Ethan Markwalter's professional journey as an interactive knowledge graph with AI-powered querying capabilities.

## 🌟 Features

- **3D Force-Directed Graph**: Interactive visualization of resume entities and relationships
- **Intelligent RAG Pipeline**: AI-powered query system with graph-based context expansion using Haystack
- **Real-time Animation**: Visual representation of AI reasoning process through 4 distinct stages
- **Multi-Entity Support**: Skills, experiences, education, projects, collaborators, and reading history
- **Dynamic Highlighting**: Category-based node highlighting and filtering
- **Relationship Mapping**: Visual connections between skills, projects, and experiences with weighted relationships
- **LLM-Powered Filtering**: OpenAI GPT-4o-mini for intelligent document selection and reasoning

## 🚀 Live Demo

[View Live Demo](https://kemistry-snowy.vercel.app/) | [Video Overview](https://www.linkedin.com/posts/ethan-markwalter_explainableai-ai-deeplearning-activity-7328473691221106688-Wdsc?utm_source=share&utm_medium=member_desktop&rcm=ACoAACmnwVYBAMW9NIHSbSRPXDYDeM9ZyUUAp9Y)

## 📊 Architecture Overview

### RAGgy AI Assistant
The system features "RAGgy" - an AI assistant that represents Ethan Markwalter and can answer questions about his professional background using the complete knowledge graph.

### Data Model
The system uses a comprehensive PostgreSQL schema with the following entities:

#### Core Entities
- **Endeavors**: Professional and personal experiences with titles, descriptions, dates, and categories
- **Knowledge**: Educational periods (academic years) with institutions and reflections
- **Classes**: Specific courses with terms, descriptions, and professor connections
- **Artifacts**: Projects, papers, and deliverables with completion dates and links
- **Skills**: Technical and hard skills with detailed descriptions
- **Characteristics**: Soft skills and personal attributes
- **Collaborators**: Mentors, professors, and project partners with LinkedIn profiles and types
- **Books**: Reading history with authors, reading order, reasons, and reflections

#### Relationship System
- **Contributions**: Weighted connections (1-10 scale) between skills/characteristics and endeavors/artifacts/classes
- **Many-to-Many Relations**: Collaborators connected to artifacts, endeavors, and classes
- **Hierarchical Links**: Classes connected to knowledge periods, artifacts to endeavors/classes

### Advanced RAG Pipeline (4-Stage Process)

#### Stage 1: Vector Retrieval
- **Embedder**: SentenceTransformers all-MiniLM-L6-v2 model
- **Top-K Retrieval**: InMemoryEmbeddingRetriever (top 10 matches)
- **Document Store**: Haystack InMemoryDocumentStore with pre-computed embeddings

#### Stage 2: LLM-Powered Filtering
- **Model**: OpenAI GPT-4o-mini
- **Process**: Intelligent document relevance evaluation using custom prompt templates
- **Output**: Filtered document IDs with reasoning explanation
- **Fallback**: Robust parsing with multiple fallback strategies

#### Stage 3: Graph Context Expansion
- **Engine**: NetworkX graph traversal
- **Strategy**: Multi-level relationship expansion based on node types and connection weights
- **Logic**: 
  - Skills/characteristics always included
  - Endeavor connections to collaborators/artifacts
  - Knowledge connections to classes
  - Class connections to professors
  - Weight-based filtering (strength ≥ 3)
  - Second-level expansion for important nodes

#### Stage 4: Response Generation
- **Context Builder**: Structured narrative combining filtered documents and graph context
- **Prompt System**: ChatPromptBuilder with comprehensive context templates
- **Response**: Concise, advocate-style responses with specific examples

### Visualization Engine
- **3D Force-Directed Graph**: Built with Three.js and d3-force-3d
- **Dynamic Node Sizing**: Based on connection count, total strength, and node type
- **Relationship Visualization**: Link opacity and width based on strength levels
- **Animated Highlighting**: Real-time visualization of RAG pipeline stages
- **Interactive Controls**: Zoom, pan, rotate, and node selection

## 🛠️ Tech Stack

### Backend (Python)
- **FastAPI** - REST API framework with CORS middleware
- **Haystack 2.13.1** - RAG pipeline orchestration
- **OpenAI GPT-4o-mini** - Language model for filtering and generation
- **SentenceTransformers 4.1.0** - Text embeddings
- **NetworkX 3.2.1** - Graph analysis and traversal
- **psycopg2** - PostgreSQL database connectivity
- **Pydantic** - Data validation and serialization

### Database
- **PostgreSQL** - Primary data store with comprehensive schema
- **Prisma ORM** - Database modeling and type-safe queries
- **Deployment**: Supabase (recommended) or self-hosted

### Frontend Integration
- **CORS Origins**: `localhost:3000`, `kem-web.netlify.app`
- **API Endpoints**: RESTful design with structured request/response models

## 🏗️ Installation & Setup

### Prerequisites
- Python 3.9+
- PostgreSQL database
- OpenAI API key
- Node.js 18+ (for frontend integration)

### Backend Setup

1. **Clone and Navigate**:
```bash
git clone https://github.com/yourusername/resume-graph-visualization.git
cd resume-graph-visualization/backend
```

2. **Virtual Environment**:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. **Environment Configuration**:
```env
DATABASE_URL_PYTHON="postgresql://user:password@host:port/database"
OPENAI_API_KEY="your-openai-api-key"
PORT=8000  # Optional, defaults to 8000
```

4. **Database Setup**:
- Ensure PostgreSQL is running
- Create database with the schema (endeavors, knowledge, classes, etc.)
- Populate with your resume data

5. **Document Store Preparation**:
```bash
# Create embeddings for your resume data
python create_document_store.py  # Your implementation
# This should generate data/document_store.json
```

6. **Run the Application**:
```bash
python app.py
# Server starts on http://0.0.0.0:8000
```

### Database Schema (Key Tables)

```sql
-- Core entities
CREATE TABLE "Endeavor" (
  "id" TEXT PRIMARY KEY,
  "entity" TEXT,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "link" TEXT,
  "imageUrl" TEXT,
  "startDate" TIMESTAMP,
  "endDate" TIMESTAMP,
  "category" TEXT
);

CREATE TABLE "Skill" (
  "id" TEXT PRIMARY KEY,
  "title" TEXT NOT NULL,
  "description" TEXT
);

CREATE TABLE "Contribution" (
  "id" TEXT PRIMARY KEY,
  "description" TEXT,
  "strengthLevel" INTEGER NOT NULL,
  "artifactId" TEXT,
  "classId" TEXT,
  "endeavorId" TEXT,
  "skillId" TEXT,
  "characteristicId" TEXT
);

-- Many-to-many relationships
CREATE TABLE "_ArtifactCollaborators" (
  "A" TEXT NOT NULL,
  "B" TEXT NOT NULL
);
```

## 🚀 Deployment

### Railway Deployment (Recommended)

1. **Connect Repository**:
```bash
railway login
railway link [your-project-id]
```

2. **Environment Variables** (Railway Dashboard):
```env
DATABASE_URL_PYTHON=postgresql://...
OPENAI_API_KEY=sk-...
PORT=8000
```

3. **Deploy**:
```bash
railway up
```

### Alternative Platforms
- **Render**: Works with `app.py` and automatic port detection
- **Heroku**: Compatible with Procfile
- **Docker**: Containerizable with Python base image

## 📈 API Usage

### Health Check
```bash
curl https://your-app.railway.app/
```

### RAG Query
```bash
curl -X POST https://your-app.railway.app/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "What are Ethan'\''s technical skills?"}'
```

### Response Format
```json
{
  "answer": {
    "final_result": {
      "replies": [{"content": "Ethan has experience in..."}],
      "retrieved_node_ids": ["skill_1", "skill_2"],
      "filtered_node_ids": ["skill_1"],
      "expanded_node_ids": ["collaborator_1", "endeavor_1"]
    }
  }
}
```

## 🎨 Graph Data Structure

### Node Properties
```python
{
  "id": "cuid_string",           # Database ID
  "name": "Display Name",        # Title or name
  "group": "endeavor",           # Category type
  "val": 15.3,                   # Calculated size
  "nodeOpacity": 0.8,            # Visibility (0.3-1.0)
  "connectionCount": 5,          # Number of connections
  "totalStrength": 23,           # Sum of relationship weights
  
  # Additional properties based on type
  "description": "...",          # Entity description
  "startDate": "2023-01-01",     # For endeavors
  "term": "Fall 2023",           # For classes
  "collaboratorType": "mentor"   # For collaborators
}
```

### Link Properties
```python
{
  "source": "node_id_1",         # Source node
  "target": "node_id_2",         # Target node
  "value": 7,                    # Relationship strength (1-10)
  "strengthLevel": 7,            # Same as value
  "linkOpacity": 0.6,            # Calculated visibility
  "linkWidth": 3.5               # Calculated thickness
}
```

## 🎬 RAG Animation Stages

The system visualizes the AI reasoning process through four distinct stages:

1. **Vector Retrieval** (Stage 1)
   - Highlights top 10 semantically similar documents
   - Shows embedding-based relevance matching

2. **LLM Filtering** (Stage 2)
   - Displays intelligent document selection
   - Shows reasoning process from language model

3. **Graph Expansion** (Stage 3)
   - Visualizes relationship-based context expansion
   - Highlights connected entities and their strengths

4. **Response Generation** (Stage 4)
   - Shows final document combination
   - Displays structured response delivery

## 🔧 Customization

### Modifying RAG Behavior

**Retrieval Settings**:
```python
# In rag_pipeline.py
pipe.add_component("vector_retriever", 
    InMemoryEmbeddingRetriever(doc_store, top_k=15))  # Increase top_k
```

**Graph Expansion Logic**:
```python
# In GraphContextExpander class
if weight >= 5:  # Increase threshold for stricter filtering
    include_connection = True
```

**LLM Models**:
```python
# Switch to different OpenAI models
LLMNodeFilter(api_key=api_key, model='gpt-4')  # More powerful
LLMNodeFilter(api_key=api_key, model='gpt-3.5-turbo')  # More economical
```

### Prompt Customization

**Filter Template** (in `prompts.py`):
```python
filter_template = """
You are analyzing documents for [Name]'s professional profile.
[Customize instructions here]
"""
```

**Response Template**:
```python
final_template = [ChatMessage.from_system("""
You are RAGgy, representing [Name]...
[Customize personality and response style]
""")]
```

## 🧪 Testing

### Manual Testing
```bash
# Test database connection
python -c "from fetch_data import get_resume_graph_data; print(len(get_resume_graph_data()['nodes']))"

# Test RAG pipeline
python -c "from rag_pipeline import create_pipeline; print('Pipeline created successfully')"
```

### API Testing
```bash
# Test with curl
curl -X POST localhost:8000/api/rag/query \
  -H "Content-Type: application/json" \
  -d '{"query": "Tell me about technical skills"}'
```

## 📊 Performance Considerations

### Optimization Tips
- **Document Store**: Pre-compute embeddings for faster retrieval
- **Graph Size**: Consider node/link limits for large datasets (>1000 nodes)
- **LLM Calls**: Monitor OpenAI API usage and implement caching
- **Memory**: NetworkX graphs are memory-intensive for large networks

### Monitoring
- Database query performance
- OpenAI API response times
- Memory usage during graph operations
- Frontend rendering performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/enhanced-rag`)
3. Follow the existing code structure and documentation
4. Add tests for new RAG components
5. Update documentation for new features
6. Submit a Pull Request

### Development Guidelines
- Maintain Haystack pipeline patterns
- Follow FastAPI best practices
- Document new graph expansion strategies
- Test with various query types
- Ensure backward compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Haystack** by Deepset for RAG framework
- **OpenAI** for language model capabilities
- **NetworkX** for graph analysis
- **3d-force-graph** by Vasco Asturiano for visualization
- **FastAPI** for modern Python web framework

## 📞 Contact

**Ethan Markwalter** - [LinkedIn]([https://linkedin.com/in/ethanmarkwalter](https://www.linkedin.com/in/ethan-markwalter/))

---

⭐ Star this repo if you find the RAG implementation helpful for your own projects!