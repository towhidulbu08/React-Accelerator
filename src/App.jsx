import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  console.log(selectedPostId);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <div>
        <ErrorBoundary fallback={<h1 className="error">Error Occurred...</h1>}>
          <Suspense fallback={<h1>Loading...</h1>}>
            <PostSelector onSelectPost={handleSelectPost} />
          </Suspense>
        </ErrorBoundary>

        {selectedPostId && (
          <ErrorBoundary
            fallback={<h1 className="error">Error Fetching Comments</h1>}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <Comments postId={selectedPostId} />
            </Suspense>
          </ErrorBoundary>
        )}
      </div>
    </div>
  );
}
