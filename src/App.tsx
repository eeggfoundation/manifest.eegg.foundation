import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import parse from 'html-react-parser'
import { classNames } from './utils'
import manifests from './manifests'

const App = () => {
    const [selectedManifest, setSelectedManifest] = useState(manifests[0])

    return (
        <div className="flex flex-col w-full justify-center">
            <div className="flex w-full md:max-w-4xl mx-auto items-center justify-between py-4 border-b">
                <h1 className="text-4xl">
                    Manifest eegg.foundation
                </h1>
                <Listbox value={selectedManifest} onChange={setSelectedManifest}>
                    {({ open }) => (
                        <>
                            <div className="relative mt-1">
                                <Listbox.Button className="text-4xl border border-stone-300 pl-3 pr-10 py-2 text-left cursor-default outline-none">
                                    <span className="block truncate">{selectedManifest.version}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon className="w-5 h-5 text-stone-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white max-h-60 text-4xl overflow-auto border border-stone-300 outline-none">
                                        {manifests.map((manifest) => (
                                            <Listbox.Option
                                                key={manifest.version}
                                                className={({active}) => classNames(
                                                    active ? 'text-white bg-stone-600' : 'text-gray-900',
                                                    'cursor-default select-none relative py-2 pl-3 pr-9',
                                                )}
                                                value={manifest}
                                            >
                                                {({selected, active}) => (
                                                    <>
                                                        <span className="block truncate">
                                                            {manifest.version}
                                                        </span>
                                                        {selected && (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-stone-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                                                )}
                                                            >
                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>

            <article className="prose m-auto py-8 px-2 md:px-0">
                <h2 className="text-stone-400">
                    EEGG = ROR + NFT
                </h2>
                <p>
                    &copy; 2022 <span className="font-bold">https://manifest.eegg.foundation</span><br/>
                    <a href="//eegg.foundation" target="_blank">eegg.foundation</a>,
                    <a href="//peperafaj.cz" target="_blank">peperafaj.cz</a>,<br/>
                    <a href="https://etherscan.io/address/0xee54e45ec1cda5a4d9e837ff3b4310721140da30" target="_blank">
                        <span className="hidden md:flex">
                            0xee54e45ec1cda5a4d9e837ff3b4310721140da30
                        </span>
                        <span className="md:hidden">
                            ETH peněženka
                        </span>
                    </a><br/>
                    Datum vzniku idee: 2022-01-04
                </p>
                <div>{parse(selectedManifest.content)}</div>
            </article>
        </div>
    )
}

export default App
