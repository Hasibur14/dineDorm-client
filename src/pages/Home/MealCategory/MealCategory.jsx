import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MealCategory = () => {

    const categories = ['allMenu', 'breakfast', 'lunch', 'dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // const [menu] = useMenu();


    // const dessert = menu.filter(item => item.category === 'dessert')
    // const soup = menu.filter(item => item.category === 'soup')
    // const salad = menu.filter(item => item.category === 'salad')
    // const pizza = menu.filter(item => item.category === 'pizza')
    // const drinks = menu.filter(item => item.category === ' drinks')


    return (
        <div>
            <div>
                <SectionTitle
                    subHeading='Our Category'
                    Heading='Menu Of The Day' >
                </SectionTitle>
            </div>
            <div className='py-16 w-[600px] mx-auto text-lg text-secondary '>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='font-semibold cursor-pointer' >
                    <TabList>
                        <Tab>ALL MENUS</Tab>
                        <Tab>BREAKFAST</Tab>
                        <Tab>LUNCH</Tab>
                        <Tab>DINNER</Tab>
                    </TabList>

                    <TabPanel>
                        all menu
                    </TabPanel>
                    <TabPanel>
                        bf
                    </TabPanel>
                    <TabPanel>
                        lunch
                    </TabPanel>
                    <TabPanel>
                        dinner
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default MealCategory;