import projeto1 from '@images/projects/project1.png'
import projeto2 from '@images/projects/project2.png'
import projeto3 from '@images/projects/project3.png'

export default [
  {
    title: "CASE_ONE_TITLE",
    image: projeto1,
    description: "CASE_ONE_DESCRIPTION ",
    articles: [
      {
        description: 'CASE_ONE_ARTICLE_ONE_TITLE',
      },
    ],
    link: 'https://maismilhas.com.br/'
  },
  {
    title: "Zabbix Report",
    image: projeto3,
    description: "Lady page para divulgação e apresentação da empresa",
    articles: [
      {
        description:
          "Aplicação multiplataforma cross browser, responsável por divulgar e apresentar o produto. O Frontend foi contruido utilizando React e o Backend em Nodejs",
      }
    ],
    link: "https://zabbix.report/"
  },
  {
    title: "Easy Institute",
    image: projeto2,
    description: "Lady page para divulgação e apresentação da empresa",
    articles: [
      {
        description:
          "Aplicação multiplataforma cross browser, responsável por divulgar e apresentar a escola e suas unidades, constituído por uma área administrativa para controle das filiais. O Front end foi contruido utilizando Angular.io 4 e o Back em Nodejs",
      }
    ],
    link: "http://easyinstitute.com.br/#/"
  },
]
