import CustomImage from '@/components/CustomImage/Image';
import Link from 'next/link';
import React from 'react';
import { Button, Image } from 'antd';
export default function MainShow() {
  return (
    <div className='main-show'>
        <div className='left-show'>
            <div className='category'>
                <label className='category-title'>DANH MỤC SẢN PHẨM</label>
                <ul className='category-list'>
                    <li className='category-item'>
                        <div className='strikethrough'></div>
                            <Link href={'#'}>
                                <label>Sản phẩm 1 </label>
                                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                    </li>
                    <li className='category-item'>
                        <div className='strikethrough'></div>
                            <Link href={'#'}>
                                <label>Sản phẩm 1 </label>
                                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                    </li>
                    <li className='category-item'>
                        <div className='strikethrough'></div>
                            <Link href={'#'}>
                                <label>Sản phẩm 1 </label>
                                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                    </li>
                    <li className='category-item'>
                        <div className='strikethrough'></div>
                            <Link href={'#'}>
                                <label>Sản phẩm 1 </label>
                                <i className="fa-solid fa-chevron-right"></i>
                            </Link>
                    </li>
                </ul>
            </div>
            <div className='best-seller'>
                <label className='best-seller-title'>SẢN PHẨM BÁN CHẠY</label>
                <ul className='best-seller-list'>
                    <li className='best-seller-item'>
                        <div className='image-best-seller'>
                            <CustomImage />
                        </div>
                        <div className='best-seller-content'>
                            <label className='name'>Giày nâu đỏ thương gia hạng đặc biệt</label>
                            <div className='price'>
                                <label className='text-sale'>500</label>
                                <label className='text-original'>800</label>
                            </div>
                            <Button>Mua ngay</Button>
                        </div>
                    </li>
                    <li className='best-seller-item'>
                        <div className='image-best-seller'>
                            <CustomImage />
                        </div>
                        <div className='best-seller-content'>
                            <label className='name'>Giày nâu đỏ thương gia hạng đặc biệt</label>
                            <div className='price'>
                                <label className='text-sale'>500</label>
                                <label className='text-original'>800</label>
                            </div>
                            <Button>Mua ngay</Button>
                        </div>
                    </li>
                    <li className='best-seller-item'>
                        <div className='image-best-seller'>
                            <CustomImage />
                        </div>
                        <div className='best-seller-content'>
                            <label className='name'>Giày nâu đỏ thương gia hạng đặc biệt</label>
                            <div className='price'>
                                <label className='text-sale'>500</label>
                                <label className='text-original'>800</label>
                            </div>
                            <Button>Mua ngay</Button>
                        </div>
                    </li>
                </ul>
                <Link href={'#'}>Xem thêm sản phẩm</Link>
            </div>
            <div className='support-online'>
                <div className='support-icon'>
                    <CustomImage />
                </div>
                <div className='support-content'>
                    <label className='text'>Hỗ trợ trực tuyến</label>
                    <Link className='phone' href={'#'}>0999.999.999</Link>
                </div>
            </div>
            <div className='news'>
                <label className='news-title'>Tin tức</label>
                <CustomImage />
                <label>Tin tức này là tin tức giả tạo</label>
                <div className='user'>
                    <label className='name'>Nguyễn Ngọc Dung</label>
                    <label className='time'>28, June, 2016</label>
                </div>
            </div>
        </div>
        <div className='right-show'>
            <div className='news-product'>
                <label className='title'>SẢN PHẨM MỚI</label>
                <div className='product'>
                    <ul className='product-list'>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert Giày tây nâu đỏ thương hiệu Convert Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='divider-custom '></div>
            </div>
            <div className='sale-product'>
                <label className='title'>SẢN PHẨM KHUYẾN MÃI</label>
                <div className='product'>
                    <ul className='product-list'>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                        <li className='product-item'>
                            <div className='image-product'>
                                <CustomImage src={'/static/banner/sale.jpg'}/>
                                <div className='sale-percent'>- 38%</div>
                            </div>
                            <div className='product-content'>
                                <label className='product-name'>
                                    Giày tây nâu đỏ thương hiệu Convert Giày tây nâu đỏ thương hiệu Convert Giày tây nâu đỏ thương hiệu Convert
                                </label>
                                <div className='product-price'>
                                    <label className='price-sales'>500đ</label>
                                    <label className='price-origin'>10000đ</label>
                                </div>
                                <div className='action-product'>
                                    <Button>Mua hàng</Button>
                                    <Button>Xem thêm</Button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='divider-custom '></div>
            </div>
        </div>
    </div>
  )
}
