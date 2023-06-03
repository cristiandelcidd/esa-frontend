import { Navbar } from "@/components/Navbar";

export const Header = () => {
  return (
    <header className='h-screen'>
      <Navbar />
      <h1>
        Learn on your <span className='font-bold'>schedule</span>
      </h1>

      <form>
        <input
          type='text'
          name='course'
          id='course'
          placeholder='Find your course'
        />
      </form>
    </header>
  );
};
