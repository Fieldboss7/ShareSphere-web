import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [post, setPost] = useState('');
  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(post)}`, '_blank');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ShareSphere</h1>
      <textarea value={post} onChange={(e) => setPost(e.target.value)} placeholder="Write your post..." />
      <button onClick={shareToFacebook}>Share to Facebook</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
