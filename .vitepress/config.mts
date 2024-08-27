import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 修改浏览器标签页的图标
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "My Learning Notes",
  description: "A VitePress Site",
  themeConfig: {
    logo:'/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'AI Notes', items:[
        {text:"总览", link:'/notes/README.md'},
        {text:"Basic Knowledge", items:[
          {text:"Step_One", link:'/notes/Basic_Knowledge/Step_One/StepOne.pdf'},
          {text:"Step_Two", link:'/notes/Basic_Knowledge/Step_Two/Step_Two_2022.10.26&2022.10.27提问.pdf'},
          {text:"Step_Three", link:'/notes/Basic_Knowledge/Step_Three/Step_Three_Q&A.pdf'},
        ]},
        {text:"Classical CNNs for Classification", items:[
          {text:"A_ConvNet_for_the_2020s", link:'/notes/Classical_CNNs_for_classification/A_ConvNet_for_the_2020s/A_ConvNet_for_the_2020s.pdf'},
          {text:"AlexNet", link:'/notes/Classical_CNNs_for_classification/AlexNet/2012-AlexNet.pdf'},
          {text:"BatchNormalization", link:'/notes/BatchNormalization/BatchNormalizaiton.pdf'},
          {text:"CSPNet", link:'/notes/Classical_CNNs_for_classification/CSPNet/CSPNet.pdf'},
          {text:"DenseNet", link:'/notes/Classical_CNNs_for_classification/DenseNet/DenseNet.pdf'},
          {text:"Dropout", link:'/notes/Classical_CNNs_for_classification/Dropout/Dropout.pdf'},
          {text:"Inception", items:[
            {text:"Inception_v1", link:'/notes/Classical_CNNs_for_classification/Inception/Inception_v1.pdf'},
            {text:"Inception_v2v3", link:'/notes/Classical_CNNs_for_classification/Inception/Inception_v2v3.pdf'}
          ]},
          {text:"RepLKNet", link:'/notes/Classical_CNNs_for_classification/RepLKNet/RepLKNet.pdf'},
          {text:"RepVGG", link:'/notes/Classical_CNNs_for_classification/RepVGG/RepVGG.pdf'},
          {text:"ResNet", link:'/notes/Classical_CNNs_for_classification/ResNet/ResNet.pdf'},
        ]},
        {text:"Feature Pyramid", items:[
          {text:"ASPP", link:'/notes/Feature_Pyramid(continued)/2017-ASPP.docx'},
          {text:"FPN", link:'/notes/Feature_Pyramid(continued)/2017-FPN.docx'},
          {text:"PANet", link:'/notes/Feature_Pyramid(continued)/2018-PANet.docx'},
          {text:"RFB", link:'/notes/Feature_Pyramid(continued)/2018-RFB.docx'},
          {text:"ASFF", link:'/notes/Feature_Pyramid(continued)/2019-ASFF.docx'},
          {text:"FPT", link:'/notes/Feature_Pyramid(continued)/2020-FPT.docx'},
          {text:"YOLOF", link:'/notes/Feature_Pyramid(continued)/2021-YOLOF.docx'}
        ]},
        {text:"Light Weight Deep CNNs", items:[
          {text:"MobileNets", link:'/notes/Light_weight_Deep_Neural_Networks/MobileNets/MobileNets.md'},
          {text:"ShuffleNets", items:[
            {text:"ShuffleNetV1", link:'/notes/Light_weight_Deep_Neural_Networks/ShuffleNets/ShuffleNetV1.pdf'},
            {text:"ShuffleNetV2", link:'/notes/Light_weight_Deep_Neural_Networks/ShuffleNets/ShuffleNetV2.pdf'}
          ]},
          {text:"EfficientNets", link:'/notes/Light_weight_Deep_Neural_Networks/EfficientNets.pdf'},
          {text:"GhostNet", link:'/notes/Light_weight_Deep_Neural_Networks/GhostNet.pdf'},
          {text:"MicroNet", link:'/notes/Light_weight_Deep_Neural_Networks/MicroNet.pdf'},
        ]},
        {text:"Shape Bias", link:'/notes/Shape-bias/Inductive_Biases/Inductive_Biases.pdf'},
        {text:"Transformers", items:[
          {text:"Transformer", link:'/notes/Transformers/2017-Transformer/Transformer.pdf'},
        ]},
        {text:"思考总结", link:'/notes/大总结.pdf'}
      ] },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    footer:{
      copyright:"Copyright@2024 Cici Tian",
    },
    // 可以自动生成侧边栏
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    // ],
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Im98tyx'}
    ],
    // 设置搜索框的样式
    search: {
    provider: "local",
    options: {
      translations: {
        button: {
          buttonText: "搜索笔记标题",
          buttonAriaLabel: "搜索文档",
        },
        modal: {
          noResultsText: "无法找到相关结果",
          resetButtonTitle: "清除查询条件",
          footer: {
            selectText: "选择",
            navigateText: "切换",
          },
        },
      },
    },
  },    
  }
})
