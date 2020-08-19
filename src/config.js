let base = 'https://mp.tjluckytoy.com';
let aliyun_base = 'https://testoss.psn.asia';

let history = [
  {
    year: '1993年',
    event: '12月28号五位骨干联手创立同缘兴，进军玩具行业。'
  }, {
    year: '1994年',
    event: '10月1日工厂迁址上仓科技镇，逐步扩大生产力。'
  }, {
    year: '1996年',
    event: '公司达到百人规模，生产力稳步上升，与韩国独资企业合作，业务逐渐转向北京。质量领先其他企业，获得业界的肯定。与PLAY BY PLAY最大供应商（北京世源玩具有限公司）建立长期合作关系。'
  }, {
    year: '2000年',
    event: '在国际市场不稳定的冲击下，同缘兴凭超高的产品质量，未受到丝毫影响，从众多制造加工企业中脱颖而出。'
  }, {
    year: '2001年',
    event: '与北京顺祥玩具有限公司建立长期合作关系，跻身同行业前列。'
  }, {
    year: '2005年',
    event: '公司获颁《安全生产工作先进单位》。'
  }, {
    year: '2008年',
    event: '5月公司获颁《自主创业标兵》证书。'
  }, {
    year: '2010年',
    event: '年底建立合资企业，投入专项基金转向玩具出口业务。'
  }, {
    year: '2011年',
    event: '正式成立同缘兴玩具有限公司 引进激光机、填充机等多台先进设备，首年年产值高达200万美金。'
  }, {
    year: '2012年',
    event: '研发卡通玩具鞋底套装机，并获得国家专利证书。'
  }, {
    year: '2015年',
    event: '快速发展的一年：扩建工厂，规模进一步扩大，由大部分外发加工转为自主研发生产；开拓外销出口业务；同年九月通过玩具界最高ICTI A级认证，具备出口国外大客户的资质。成立大客户部，明晰职责，提升服务质量，产品出口至欧盟、北美等地，领行业先河。'
  }, {
    year: '2016年',
    event: '引进CCD定位激光机，同年9月份股改上市，成立同缘兴科技股份有限公司。10月13日举行敲锣仪式，在对外出口领域更上一个新阶。'
  }, {
    year: '2017年',
    event: '大手笔投入产品研发能力，聘请国内知名设计师、开版师壮大研发团队。'
  }, {
    year: '2018年',
    event: '引进大型智能裁床设备，应邀加入中国玩具协会成为5星级供应商；筹备蓟州开发区分厂建设，目前厂房面积10000㎡、仓储面积15000㎡，企业年产值700万美金。活跃在国内多个知名展会，与欧洲影响力最大的PMS、SIX FLAGS、IDEAL TOYS DIRECT、FIESTA CONCESSION CORP、SUPREMER等多家公司达成合作。'
  }
];

let cc_data = {
  youshi_img: aliyun_base + '/static/image-cc-youshi.jpg',
  youshi_title: '我们的优势',
  youshi_cont: '27年毛绒玩具生产经验  朝气蓬勃的员工队伍  完善精干的管理体系',
  yuanze_img: aliyun_base + '/static/image-cc-yuanze.jpg',
  yuanze_title: '我们的原则',
  yuanze_cont: '质量精良  客户至上  诚实守信',
  mubiao_img: aliyun_base + '/static/image-cc-mubiao.jpg',
  mubiao_title: '我们的目标',
  mubiao_cont: '对外成就客户  对内成就员工  真诚回馈社会  共同实现梦想',
};

let config = {
  url: base + '/',
  api: base + '/api/',
  aliyun: aliyun_base + '/',//阿里云oss链接域名

  history: history,//发展历程数据
  cc_data,//企业文化数据

  cate: { cate_id: 0, cate_flag: false }
};

export default config;
