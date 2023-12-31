import { Button } from "antd"
import { ClearOutlined,
PlusCircleOutlined 
} from "@ant-design/icons"

const Carts = () => {
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="bg-blue-600 text-center py-4
                       text-white font-bold tracking-wide">Sepetim</h2>
{/*Sepet İçeriği*/}
            <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2
                           overflow-y-auto ">
                <li className="cart-item flex justify-between">
                <div className="flex items-center">
                    <img src="https://img.piri.net/resim/upload/2020/09/26/12/21/24191133elma.jpg"
                     alt=""  className="w-16 h-16 object-cover"/>
                     <div className="flex flex-col ml-2">
                        <b>Elma</b>
                        <span>12₺ x 2</span>
                     </div>
                </div>
                <div className="flex item-center gap-x-1">
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}> 
                </Button>
                <span className="font-bold">1</span>
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}>
                </Button>
                </div>
                </li>
                <li className="cart-item flex justify-between">
                <div className="flex items-center">
                    <img src="https://img.piri.net/resim/upload/2020/09/26/12/21/24191133elma.jpg"
                     alt=""  className="w-16 h-16 object-cover"/>
                     <div className="flex flex-col ml-2">
                        <b>Elma</b>
                        <span>12₺ x 2</span>
                     </div>
                </div>
                <div className="flex item-center gap-x-1">
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}> 
                </Button>
                <span className="font-bold">1</span>
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}>
                </Button>
                </div>
                </li>
                <li className="cart-item flex justify-between">
                <div className="flex items-center">
                    <img src="https://img.piri.net/resim/upload/2020/09/26/12/21/24191133elma.jpg"
                     alt=""  className="w-16 h-16 object-cover"/>
                     <div className="flex flex-col ml-2">
                        <b>Elma</b>
                        <span>12₺ x 2</span>
                     </div>
                </div>
                <div className="flex item-center gap-x-1">
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}> 
                </Button>
                <span className="font-bold">1</span>
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}>
                </Button>
                </div>
                </li>
                <li className="cart-item flex justify-between">
                <div className="flex items-center">
                    <img src="https://img.piri.net/resim/upload/2020/09/26/12/21/24191133elma.jpg"
                     alt=""  className="w-16 h-16 object-cover"/>
                     <div className="flex flex-col ml-2">
                        <b>Elma</b>
                        <span>12₺ x 2</span>
                     </div>
                </div>
                <div className="flex item-center gap-x-1">
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}> 
                </Button>
                <span className="font-bold">1</span>
                <Button
                    type="primary"
                    size="small"
                    className="w-full flex items-center justify-center !rounded-full"
                    icon={<PlusCircleOutlined />}>
                </Button>
                </div>
                </li>
            </ul>
            <div className="cart-totals mt-auto"></div>
            <div className="border-t border-b mt-4">
{/*Ara Toplam */}
                <div className="flex justify-between p-2">
                    <b>Ara Toplam</b>
                    <span>100₺</span>
                </div>
{/*KDV */}
                <div className="flex justify-between p-2">
                    <b>KDV %8</b>
                    <span className="text-red-700">+8₺</span>
                </div>
{/*Genel Toplam*/}
                <div className="flex justify-between p-2 border-b">
                    <b className="text-xl text-green-500">Genel Toplam</b>
                    <span className="text-xl leading-none">108₺</span>
                </div>
{/*Sipariş Oluştur ve Temizle Butonları*/}
                <div className="py-4 px-2">
                    <Button type="primary" size="large" className="w-full">
                    Sipariş Oluştur
                    </Button>
                    <Button
                    type="primary" size="large"
                    className="w-full mt-2 flex items-center justify-center" danger
                    icon={<ClearOutlined />}
                    >Temizle
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Carts;