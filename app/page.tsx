import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to Lucky Draw on Blockchain!</h1>
      <p className="text-lg text-center mb-4">
        Deposit any amount of ETH or USDT, and when you withdraw, you'll receive a random deposit from another user!
      </p>
      <div className="flex justify-center">
        <Link href="/deposit">
          <a className="px-6 py-3 bg-blue-500 text-white rounded-md text-lg">Join Now</a>
        </Link>
      </div>

      {/* Show recent draws or stats here */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">Recent Draws</h2>
        <ul className="space-y-4">
          {/* You would map recent draws data here */}
          <li>0.1 ETH → 2 ETH</li>
          <li>0.5 ETH → 1 ETH</li>
          <li>2 ETH → 0.1 ETH</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

