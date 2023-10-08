import React, { useState } from 'react';
import data from './data';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container,  BtnsWrapper, Btn, InputSearchWrapper, Input, ResetBtn } from './styles';

import { BiSolidUser } from 'react-icons/bi';
import { FaFutbol, FaMusic, FaBook, FaGamepad, FaTheaterMasks, FaRunning, FaBiking, FaSwimmer, FaHiking, FaGuitar, FaPaintBrush, FaCameraRetro, FaDumbbell, FaChess } from 'react-icons/fa';
import { AscendingIcon, DescendingIcon } from './styles';

interface Contact {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    city: string;
    location: string;
    proffesion: string;
    hobbies: [string]
    status: boolean;
    avatar: string;
}

const Search: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>(data as Contact[]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const hobbiePersons = [
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaGamepad />,
            hobbie2: <FaTheaterMasks />,
            hobbie3: <FaRunning />,
        },
        {
            hobbie1: <FaBiking />,
            hobbie2: <FaSwimmer />,
            hobbie3: <FaHiking />,
        },
        {
            hobbie1: <FaGuitar />,
            hobbie2: <FaPaintBrush />,
            hobbie3: <FaCameraRetro />,
        },
        {
            hobbie1: <FaDumbbell />,
            hobbie2: <FaChess />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },
        {
            hobbie1: <FaFutbol />,
            hobbie2: <FaMusic />,
            hobbie3: <FaBook />,
        },

    ]

    const handleSortAsc = () => {
        const sorted = [...contacts].sort((a, b) => {
            return a.first_name.localeCompare(b.first_name);
        });
        setContacts(sorted);
    };

    const handleSortDesc = () => {
        const sorted = [...contacts].sort((a, b) => {
            return b.first_name.localeCompare(a.first_name);
        }
        );
        setContacts(sorted);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchTerm = e.target.value;
        setSearchTerm(newSearchTerm);

        const filteredContacts = data.filter((contact) => {
            return contact.first_name.toLowerCase().includes(newSearchTerm.toLowerCase());
        });

        setContacts(filteredContacts as Contact[]);
    };

    const handleReset = () => {
        setContacts(data as Contact[]);
        setSearchTerm('');
    };

    return (
        <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div><h1><span>C</span>ontacts</h1></div>
            <BtnsWrapper>
                    <Btn 
                      onClick={handleSortAsc}
                    > 
                      <AscendingIcon />
                    </Btn>
                    
                    <InputSearchWrapper>
                      <Input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
                    </InputSearchWrapper>
                        <Btn
                            onClick={handleSortDesc}
                        >
                            <DescendingIcon />
                    </Btn>
            </BtnsWrapper>
            <Table striped bordered hover variant="dark" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2.5rem" }}>
                <thead>
                    <tr style={{fontSize: ".8rem", color: "#7a7a7a"}}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>City</th>
                        <th>Location</th>
                        <th>Proffesion</th>
                        <th>Hobbies</th>
                        <th>Status</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
            <tbody style={{marginTop: "1rem"}}>
                {contacts.map((contact, index) => (
                    <tr 
                      className='centered-row'
                      key={contact.id} style={{ fontSize: ".7rem", textAlign: "center"}}>
                        <td>{contact.first_name}</td>
                        <td>{contact.last_name}</td>
                        <td>{contact.city}</td>
                        <td>{contact.location}</td>
                        <td>{contact.proffesion}</td>
                        <td>
                        <div className='hobbies-cell'>
                              {hobbiePersons[index].hobbie1}
                              {hobbiePersons[index].hobbie2}
                              {hobbiePersons[index].hobbie3}
                            </div>
                        </td>
                        <td
                            
                        >{
                          contact.status ? <BiSolidUser style={{color: "#4ea070", fontSize: "1.5rem", width: "3rem"}} /> : <BiSolidUser style={{color: "#c15555", fontSize: "1.5rem", width: "3rem"}} />
                        }
                           
                        </td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td
                         className='img-cell'
                        ><Image src={contact.avatar} roundedCircle width={60} height={60} style={{objectFit: "cover"}} /></td>
                    </tr>
                ))}
            </tbody>
            </Table>

            <ResetBtn onClick={handleReset}>Reset</ResetBtn>
        </Container>
    );
};

export default Search;
