import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
        <div className='container mx-auto my-16'>
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
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                                {meal.slice(0,6).map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-14 lg:gap-10'>
                                {breakfast.slice(0,6).map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-14 lg:gap-10'>
                                {lunch.slice(0,6).map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-1 lg:grid-cols-2  gap-14 lg:gap-10'>
                                {dinner.slice(0,6).map(item => (
                                    <MyTabs key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                    </Container>
                </Tabs>
            </div>

            <div className="text-center mt-10">
                <Link to='/meals' className='btn text-white items-center justify-center  transition-colors duration-300 transform bg-gradient-to-tl hover:bg-gradient-to-tr  from-[#910404] to-[#DC3545] text-sm px-6'>See More</Link>
            </div>
        </div>
    );
};

export default MealCategory;
