
import { Pagination,Carousel } from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import React,{useState,useRef} from "react";
export const sliderWidth = Dimensions.get('window').width +30;
export const itemWidth = Math.round(sliderWidth*0.8);

const data =[
    {
        id:1,
        name:"slide 1",
        url:"https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1"
    },
    {
        id:2,
        name:"slide 2",
        url:"https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1"
    },
    {
        id:3,
        name:"slide 3",
        url:"https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1"
    },
    {
        id:4,
        name:"slide 4",
        url:"https://th.bing.com/th/id/OIP.RDUYCBnsLKTMSE0Et3uBhwHaEo?pid=ImgDet&rs=1"
    },
]
const renderItem =({item})=>{
    return(
        <view style={{
            padding:20,
            borderRadius:50,
            alignItems:'center',
            backgroundColor:'lightblue',
        }}>
            <Image source={{uri:item.url}} style = {{width:200,height:200}}/>
        </view>
    );
};

const NewRelease = () =>{
    const [index,setIndex] = useState(0);
    const isCarousel = useRef(null);
    return(
        <View style = {{paddingTop:50,alignItem:'center'}}>
            <Carousel
            ref = {isCarousel}
            data = {data}
            renderItem = {renderItem}
            sliderWidth = {sliderWidth}
            itemWidth = {itemWidth}
            onSnapToItem = {index => setIndex(index)}
            />
            <Pagination
            dotsLength={Date.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            />
        </View>
    );
};
export default NewRelease;