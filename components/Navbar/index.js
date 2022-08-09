import { Fragment } from 'react';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/solid';
import { Dialog, Transition } from '@headlessui/react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [listNav] = useState([
    'Games',
    'Rewards',
    'Discover',
    'Global Rank',
    'Sign In',
  ]);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };
  return (
    <>
      <section className="w-screen fixed bg-white/90 z-20 backdrop-blur-md ">
        <div className="max-w-7xl flex py-10 px-10 mx-auto justify-between items-center">
          <img src="/logo.svg" alt="logo" />
          <MenuAlt3Icon
            className="w-10 h-10 text-black/60 hover:text-black p-2 bg-white cursor-pointer md:hidden"
            onClick={openDialog}
          />
          <ul className="md:flex items-center hidden">
            <li className="item-nav font-normal text-black">Home</li>
            <li className="item-nav">Games</li>
            <li className="item-nav">Rewards</li>
            <li className="item-nav">Discover</li>
            <li className="item-nav">Global Rank</li>
            <button className="py-2 px-6 mx-3 bg-slate-200 text-black rounded-full">
              Sign In
            </button>
          </ul>
        </div>
      </section>
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeDialog}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-screen justify-end text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-10/12 h-full max-w-lg transform overflow-hidden  
            bg-white py-12 px-10 text-left align-middle shadow-xl transition-all"
                >
                  <Dialog.Title
                    className="text-lg font-medium leading-6 text-gray-900 flex items-center
                justify-between pl-4"
                  >
                    <h3 className="text-black font-semibold text-xl">
                      Store GG
                    </h3>
                    <div
                      className="cursor-pointer p-2 rounded group"
                      onClick={closeDialog}
                    >
                      <XIcon className="text-slate-400 w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                  </Dialog.Title>

                  <div className="mt-10">
                    {listNav.map((item, i) => (
                      <div
                        key={i}
                        className="py-2 px-4 my-3
                    text-lg"
                      >
                        <a
                          onClick={closeDialog}
                          className="cursor-pointer inline-block rounded-md text-slate-500 hover:text-purple after:content-['']
                           after:w-0 after:bg-purple hover:after:w-full after:transition-all after:h-px after:bottom-1 after:block
                           after:duration-300 "
                        >
                          {item}
                        </a>
                      </div>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
