import { TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MyTabs = () => {
   

    // className="px-4 py-2 cursor-pointer text-gray-600 hover:text-blue-600 focus:outline-none" selectedClassName="text-blue-600 font-bold border-b-2 border-blue-600"

    return (
        <div>

<TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20 '>
                            {
                                salad.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                pizza.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                soup.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                dessert.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-20'>
                            {
                                drinks.map(item => (
                                    <FoodCard key={item._id} item={item}></FoodCard>
                                ))
                            }
                        </div>
                    </TabPanel>

     


    
       </div>
    )
};

export default MyTabs;
