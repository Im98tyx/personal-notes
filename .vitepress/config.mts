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
          {text:"Step_One", link:'/notes/basic_knowledge/step_one/stepone.pdf'},
          {text:"Step_Two", link:'/notes/basic_knowledge/step_two/steptwo.pdf'},
          {text:"Step_Three", link:'/notes/basic_knowledge/step_three/stepthree.pdf'},
        ]},
        {text:"Classical CNNs for Classification", items:[
          {text:"A_ConvNet_for_the_2020s", link:'/notes/classical_cnns_for_classification/a_convnet_for_the_2020s/a_convNet_for_the_2020s.pdf'},
          {text:"AlexNet", link:'/notes/classical_cnns_for_classification/alexnet/2012-alexnet.pdf'},
          {text:"BatchNormalization", link:'/notes/classical_cnns_for_classification/batchnormalization/batchnormalizaiton.pdf'},
          {text:"CSPNet", link:'/notes/classical_cnns_for_classification/cspnet/cspnet.pdf'},
          {text:"DenseNet", link:'/notes/classical_cnns_for_classification/densenet/densenet.pdf'},
          {text:"Dropout", link:'/notes/classical_cnns_for_classification/dropout/dropout.pdf'},
          {text:"Inception", items:[
            {text:"Inception_v1", link:'/notes/classical_cnns_for_classification/inception/inception_v1.pdf'},
            {text:"Inception_v2v3", link:'/notes/classical_cnns_for_classification/inception/inception_v2v3.pdf'}
          ]},
          {text:"RepLKNet", link:'/notes/classical_cnns_for_classification/replknet/replknet.pdf'},
          {text:"RepVGG", link:'/notes/classical_cnns_for_classification/repvgg/repvgg.pdf'},
          {text:"ResNet", link:'/notes/classical_cnns_for_classification/resnet/resnet.pdf'},
        ]},
        {text:"Feature Pyramid", items:[
          {text:"ASPP", link:'/notes/feature_pyramid/asff.docx'},
          {text:"FPN", link:'/notes/feature_pyramid/fpn.docx'},
          {text:"PANet", link:'/notes/feature_pyramid/panet.docx'},
          {text:"RFB", link:'/notes/feature_pyramid/rfb.docx'},
          {text:"ASFF", link:'/notes/feature_pyramid/asff.docx'},
          {text:"FPT", link:'/notes/feature_pyramid/fpt.docx'},
          {text:"YOLOF", link:'/notes/feature_pyramid/yolof.docx'}
        ]},
        {text:"Light Weight Deep CNNs", items:[
          {text:"MobileNets", link:'/notes/light_weight_deep_neural_networks/mobilenets/mobilenets.md'},
          {text:"ShuffleNets", items:[
            {text:"ShuffleNetV1", link:'/notes/light_weight_deep_neural_networks/shufflenets/shufflenetv1.pdf'},
            {text:"ShuffleNetV2", link:'/notes/light_weight_deep_neural_networks/shufflenets/shufflenetv2.pdf'}
          ]},
          {text:"EfficientNets", link:'/notes/light_weight_deep_neural_networks/efficientnets.pdf'},
          {text:"GhostNet", link:'/notes/light_weight_deep_neural_networks/ghostnet.pdf'},
          {text:"MicroNet", link:'/notes/light_weight_deep_neural_networks/micronet.pdf'},
        ]},
        {text:"Shape Bias", link:'/notes/shape-bias/inductive_biases/inductive_biases.pdf'},
        {text:"Transformers", items:[
          {text:"Transformer", link:'/notes/transformers/2017-transformer/transformer.pdf'},
        ]},
        {text:"思考总结", link:'/notes/sum.pdf'}
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
