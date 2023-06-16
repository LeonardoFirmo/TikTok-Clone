
import './App.css';
import Video from './pages/Video/Video';



function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          likes={100}
          messages={200}
          shares={300}
          name="Leo"
          description="Gato Goleiro"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video
          likes={23}
          messages={444}
          shares={500}
          name="Leo"
          description="Gato olhando para camera"
          music="música country"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />

        <Video
          likes={353}
          messages={250}
          shares={25}
          name="Leo"
          description="Gato Pulando"
          music="música épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        
      </div>
    </div>
  );
}

export default App;
