import { Link } from 'react-router';
import AnimatedCard from './AnimatedCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  subtitle: string;
}

// Sample image data - replace with your actual images
const images = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1734917141553-274732d788cb?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Night Galaxy Sky',
    title: 'Night Galaxy Sky',
    subtitle: 'Space',
    description:
      'A beautiful night sky with stars and a galaxy in the background. The image is dark and moody. The stars are bright and twinkling. The galaxy is colorful and vibrant.',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1733690567161-326d5294d3bb?q=80&w=2172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Blue Mountains',
    title: 'Blue Mountains',
    subtitle: 'Nature',
    description:
      'A beautiful landscape of blue mountains. The image is serene and peaceful. The mountains are tall and majestic. The sky is clear and blue.',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1736149989327-834d28d4577b?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Blur Leaves',
    title: 'Blur Leaves',
    subtitle: 'Nature',
    description:
      'A close-up image of green leaves. The leaves are blurry and out of focus. The image is abstract and artistic. The colors are vibrant and rich.',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1738941329663-4401102e9dab?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Wall with Leaves',
    title: 'Wall with Leaves',
    subtitle: 'Architecture',
    description:
      'A wall covered with green leaves. The leaves are lush and vibrant. The image is natural and organic. The wall is textured and colorful with green leaves.',
  },
] as Image[];

export default function LayoutWithCards() {
  return (
    <div style={{ maxWidth: '800px' }}>
      <div className="a-content">
        <div className="top">
          <h1>Layout with cards</h1>
          <Link to="/">Go Home</Link>
        </div>

        {/* Animated cards */}
        <AnimatedCard images={images} />
        {/* End animated cards */}

        <div className="nav-btns">
          <Link to="/simple" className="btn">
            <ChevronLeftIcon style={{ width: '16px' }} />
            Simple
          </Link>
          <Link to="/" className="btn">
            ...
            <ChevronRightIcon style={{ width: '16px' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}
