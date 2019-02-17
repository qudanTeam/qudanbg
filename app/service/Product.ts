import { Service, Context } from 'egg';
import sequelize = require('sequelize');
import moment = require('moment');
// import { productAttribute } from '../entity/db';

interface createProductAttribute {
  id:number;
  product_name?:string;
  logo?:string;
  product_type?:number;
  is_hot?:boolean;
  is_show?:boolean;
  is_in_shop?:boolean;
  is_shelf?:boolean;
  customer?:number;
  create_time?:Date;
  modify_time?:Date;
  commission?:number;
  sort_val?:number;
  bg_category?:string;
  amount_line?:number;
  progress_query_img?:string;
  allow_rate:number;
  apply_num?:number;
  apply_condition?:string;
  apply_tp_img?:string;
  day_rate:number;
  month_rate?:number;
  a_begin?:number;
  a_limit?:number;
  b_begin?:number;
  b_limit?:number;
  c_start?:number;
  c_limit?:number;
  a_level_reward?:number;
  b_level_reward?:number;
  c_level_reward?:number;
  base_salary?:number;
  month_salary?:string;
  salary?:string;
  salary_desc:string;
  month_salary_desc?:string;
  second_summary?:string;
  third_summary?:string;
  detail_header_img?:string;
  card_long_img?:string;
  product_show_img?:string;
  burundian?:string;
  settlement_type?:number;
  expire_unit?:string;
  how_settle?:string;
  expire_begin?:number;
  expire_end?:number;
  commission_standard?:string;
  share_title?:string;
  card_progress_img?:string;
  base_right?:string;
  handing_process?:string;
  preferential?:string;
  special_tag?:string;
  special_txt:string;
  unit?:string;
  jl_unite?:string;
  product_profit_price?:number;
  product_link?:string;
  card_kind?:number;
  product_poster?:string;
  loan_limit?:number;
  share_logo?:string;
  share_content?:string;
  platform_award?:number;
  pos_price?:number;
  pos_deposit?:number;
  benefits_b?:string;
  benefits_c?:string;
  require_condition?:string;
  
  // id:number;
  // product_name?:string;
  // logo?:string;
  // product_type?:number;
  // product_category?:any;
  // advertisers_obj?:any;
  // is_hot?:boolean;
  // is_show?:boolean;
  // is_in_shop?:boolean;
  // is_shelf?:boolean;
  // customer?:number;
  // create_time?:Date;
  // modify_time?:Date;
  // commission?:number;
  // sort_val?:number;
  // bg_category?:string;
  // amount_line?:number;
  // progress_query_img?:string;
  // allow_rate:number;
  // apply_num?:number;
  // apply_condition?:string;
  // apply_tp_img?:string;
  // day_rate:number;
  // month_rate?:number;
  // a_begin?:number;
  // a_limit?:number;
  // b_begin?:number;
  // b_limit?:number;
  // c_start?:number;
  // c_limit?:number;
  // a_level_reward?:number;
  // b_level_reward?:number;
  // c_level_reward?:number;
  // base_salary?:number;
  // month_salary?:string;
  // salary?:string;
  // salary_desc:string;
  // month_salary_desc?:string;
  // second_summary?:string;
  // third_summary?:string;
  // detail_header_img?:string;
  // card_long_img?:string;
  // product_show_img?:string;
  // burundian?:string;
  // settlement_type?:number;
  // expire_unit?:string;
  // how_settle?:string;
  // expire_begin?:number;
  // expire_end?:number;
  // commission_standard?:string;
  // share_title?:string;
  // card_progress_img?:string;
  // base_right?:string;
  // preferential?:string;
  // special_tag?:string;
  // special_txt:string;
  // unit?:string;
  // jl_unite?:string;
  // product_link_obj?:any;
  // product_link?:string;
  // product_poster?:string;
  // loan_limit?:number;
  // =======
  product_category?:any;
  advertisers_obj?:any;
  product_link_obj?:any;
  update_admin?:string;
  // ======
}



export default class Product extends Service {
  model: sequelize.Sequelize;

  constructor(ctx: Context) {
    super(ctx)

    this.model = ctx.model
  }

  async findList(filters: any) {
    const { ctx } = this;
    const { offset, limit } = ctx.helper.parsedPageFromParams(filters);

    let condition:any = {}

    if (filters.product_id) {
      condition.id = {
        [this.model.Op.like]: filters.product_id,
      };
    }

    if (filters.product_name) {
      condition.product_name = {
        [this.model.Op.like]: filters.product_name,
      }
    }

    if (filters.product_type) {
      condition.product_type = filters.product_type;
    }

    if (filters.bg_category) {
      condition.bg_category = {
        [this.model.Op.like]: filters.bg_category,
      }
    }

    if (filters.is_shelf) {
      condition.is_shelf = filters.is_shelf;
    }



    const reply = await this.model.Product.findAll({
      offset,
      limit,
      where: condition,
      order: [
        ['modify_time', 'desc'],
      ],
    });

    const total = await this.model.Product.count({
      where: condition,
    });

    return {
      list: reply,
      page: filters.page,
      pageSize: filters.pageSize,
      total,
    }
  }

  async create(product: createProductAttribute) {
    // this.model.Admin
    product.create_time = new Date();
    product.modify_time = new Date();

    if (!product.salary_desc) {
      product.salary_desc = '-';
    }

    const { 
      product_category, 
      advertisers_obj, 
      product_link_obj,
      is_hot,
      is_in_shop,
      is_shelf,
      is_show,
      update_admin,
      ...rest 
    } = product;

    rest.id = 0;
    // const { key } = product_category;
    // rest.customer = adv
    if (advertisers_obj) {
      rest.customer = advertisers_obj.key;
    }

    // if (product_link_obj) {
    //   rest.product_link = product_link_obj.key;
    // }

    const created = await this.model.Product.create(
      {
        is_hot: is_hot ? 1 : 0,
        is_in_shop: is_in_shop ? 1 : 0,
        is_shelf: is_shelf ? 1 : 0,
        is_show: is_show ? 1 : 0,
        update_admin,
        ...rest
      }
    );

    if (product_category) {
      // 新增分类关系
      await this.model.ProductCategoryRelation.create({
        id: 0,
        product_id: created.id,
        category_id: product_category.key,
        create_time: new Date(),
        modify_time: new Date(),
      });
    }
    

    return {
      id: created.id,
      createdAt: moment(created.create_time).format(moment.defaultFormat),
    }
  }

  async update(id: number, fields: createProductAttribute) {
    fields.modify_time = new Date();
    const { 
      product_category,
      advertisers_obj,
      product_link_obj,
      is_hot,
      is_in_shop,
      is_shelf,
      is_show,
      ...rest 
    } = fields;

    if (advertisers_obj) {
      rest.customer = advertisers_obj.key;
    }

    const foundProduct = await this.model.Product.findOne({
      where: {
        id,
      }
    });

    if (!foundProduct) {
      this.ctx.throw(404, 'not found this product');
      return
    }

    if (!rest.salary_desc) {
      rest.salary_desc = '-';
    }

    // const { is_hot, } = foundProduct;

    // if (product_link_obj) {
    //   rest.product_link = product_link_obj.key;
    // }

    await this.model.Product.update({
      is_hot: is_hot ? 1 : 0,
      is_in_shop: is_in_shop ? 1 : 0,
      is_shelf: foundProduct.is_shelf,
      is_show: is_show ? 1 : 0,
      ...rest
    }, {
      where: {
        id,
      },
    });

    if (product_category) {
      await this.model.ProductCategoryRelation.destroy({
        where: {
          product_id: id,
        },
      });
      // 新增分类关系
      await this.model.ProductCategoryRelation.create({
        id: 0,
        product_id: id,
        category_id: product_category.key,
        create_time: new Date(),
        modify_time: new Date(),
      });
    }

    return {
      id,
    };
  }

  async disableShelf(id: number) {
    await this.model.Product.update({
      is_shelf: 0,
      is_show: 0,
    }, {
      where: {
        id,
      },
    });

    return {
      id,
    }
  }

  async onShelf(id: number) {
    await this.model.Product.update({
      is_shelf: 1,
      is_show: 1,
    }, {
      where: {
        id,
      },
    });

    return {
      id,
    }
  }

  async details(id: number) {
    const { ctx, model } = this;
    const product = await model.Product.findOne({
      where: {
        id,
      },
    });

    if (!product) {
      ctx.throw(404, 'not fount this product');
      return;
    }

    const productCategory = await model.ProductCategoryRelation.findOne({
      where: {
        product_id: id,
      },
    });

    let product_category = {};
    if (productCategory) {
      const category = await model.Category.findOne({
        where: {
          id: productCategory.category_id,
        },
      });

      if (category) {
        product_category = {
          key: productCategory.category_id,
          label: category.name,
        };
      }

      // if (!category) {
      //   ctx.throw(404, 'not found this category');
      //   return;
      // }
      
    }

    let advertisers_obj = {};

    if (!!product.customer) {
      const customer = await model.Customer.findOne({where: { id: product.customer }});
      // if (!customer) {
      //   ctx.throw(404, 'not found this customer');
      //   return;
      // }

      if (customer) {
        advertisers_obj = {
          key: product.customer,
          label: customer.name,
        };
      }
      
    }

    // let product_link_obj = {};

    // if (!!product.product_link) {
    //   const link = await model.ProductLinks.findOne({where: { link: product.product_link}});
    //   if (link) {
    //     product_link_obj = {
    //       key: product.product_link,
    //       label: `${link.category_name}/${link.product_name}`,
    //     };
    //   }
    // }

    const {
      is_hot,
      is_in_shop,
      is_shelf,
      is_show,
      ...productRest
    } = product.toJSON()

    
    const productView: createProductAttribute = {
      product_category,
      advertisers_obj,
      // product_link_obj,
      is_hot: !!is_hot,
      is_in_shop: !!is_in_shop,
      is_shelf: !!is_shelf,
      is_show: !!is_show,
      ...productRest,
    }
    return {
      product: productView,
    };
  }

}