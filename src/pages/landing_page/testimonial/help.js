import imagePath from "../../../constants/imagePath"

export const sliderSetting = {
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

export const dataTestimonials = [
  {
    icon: imagePath.consumenOne,
    name: 'Siti Budomon',
    age: '21',
    location: 'Jakarta',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
  {
    icon: imagePath.consumenTwo,
    name: 'Sita Budeman',
    age: '27',
    location: 'Bandung',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
  {
    icon: imagePath.consumenOne,
    name: 'Siki Budimun',
    age: '28',
    location: 'Surabaya',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
  {
    icon: imagePath.consumenTwo,
    name: 'Sidi Budimin',
    age: '24',
    location: 'Riau',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
  {
    icon: imagePath.consumenOne,
    name: 'Siri Budimon',
    age: '23',
    location: 'Balikpapan',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
  {
    icon: imagePath.consumenTwo,
    name: 'Simi Budimen',
    age: '34',
    location: 'Bali',
    text: `"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus explicabo reprehenderit quisquam neque ducimus laborum architecto sit, repellat saepe, at consequuntur deleniti facere unde cumque alias quaerat beatae fugiat accusantium."`,
  },
]
