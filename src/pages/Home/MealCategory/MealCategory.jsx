import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../../components/Container/Container';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMeal from '../../../hooks/useMeal';
import MyTabs from './MyTabs';

const MealCategory = () => {

    const categories = ['allMenu', 'breakfast', 'lunch', 'dinner'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex === -1 ? 0 : initialIndex);
    const [meal] = useMeal();

    const breakfast = meal.filter(item => item.category === 'Breakfast');
    const lunch = meal.filter(item => item.category === 'Lunch');
    const dinner = meal.filter(item => item.category === 'Dinner');

    return (
        <div className='container mx-auto'>
            <div>
                <SectionTitle
                    subHeading='Our Category'
                    Heading='Menu Of The Day'
                />
            </div>

            <div className='text-primary'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className='font-semibold cursor-pointer space-y-10'>
                    <div className='w-[500px] mx-auto'>
                        <TabList>
                            <div className='ml-10'>
                                <Tab>ALL MENUS</Tab>
                                <Tab>BREAKFAST</Tab>
                                <Tab>LUNCH</Tab>
                                <Tab>DINNER</Tab>
                            </div>
                        </TabList>
                    </div>
                    <Container>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10'>
                                {meal.map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10'>
                                {breakfast.map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10'>
                                {lunch.map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-10'>
                                {dinner.map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                    </Container>
                </Tabs>
            </div>

        </div>
    );
};

export default MealCategory;
