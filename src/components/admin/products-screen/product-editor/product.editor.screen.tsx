import { ChangeEvent, FC, useEffect, useRef, useState } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select'

import styles from './product.editor.module.css';
import { Button } from "react-bootstrap";
import { useCreateProductMutation, useGetProductProperitesQuery } from "../../../../services/product-service";
import { useNavigate } from "react-router-dom";

interface Options {
    value: string;
    label: string;
}

interface Props {
    mode: string;
}

const ProductEditorScreen: FC<Props> = (props) => {
    const navigate = useNavigate();
    const {data} = useGetProductProperitesQuery();
    const [createProduct] = useCreateProductMutation();

    const uploadRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File>();

    const [categoryOptions, setCategoryOptions] = useState<Options[]>([]);
    const [upperNotesOptions, setUpperNotesOptions] = useState<Options[]>([]);
    const [middleNotesOptions, setMiddleNotesOptions] = useState<Options[]>([]);
    const [bottomNotesOptions, setBottomNotesOptions] = useState<Options[]>([]);
    const [aromaGroupOptions, setAromaGroupOptions] = useState<Options[]>([]);
    const [brandOptions, setBrandOptions] = useState<Options[]>([]);

    const handleSetFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) setFile(e.target.files[0]);
    }

    const handleLeaveWithoutSaving = () => {
        navigate('/admin');
    }

    useEffect(() => {
        if(data) {
            setCategoryOptions(data.categories.map((item) => { return {value: item.category_ID.toString(), label: item.name} }))
            setAromaGroupOptions(data.aromaGroups.map((item) => { return {value: item.aromaGroup_ID.toString(), label: item.aromaGroup_Name}}))
            setBrandOptions(data.brands.map((item) => { return {value: item.brand_ID.toString(), label: item.name}}))

            var tempOptions: {value: string; label: string}[] = [];
            data.perfumeNotes.map((item) => { 
                if(item.type === "upper") {
                    tempOptions.push({value: item.note_ID.toString(), label: item.name});
                }
            })
            setUpperNotesOptions(tempOptions);

            tempOptions = [];
            data.perfumeNotes.map((item) => { 
                if(item.type === "middle") {
                    tempOptions.push({value: item.note_ID.toString(), label: item.name});
                }
            })
            setMiddleNotesOptions(tempOptions);

            tempOptions = [];
            data.perfumeNotes.map((item) => { 
                if(item.type === "bottom") {
                    tempOptions.push({value: item.note_ID.toString(), label: item.name});
                }
            })
            setBottomNotesOptions(tempOptions);
        }
    }, [data])

    useEffect(() => {
        
    }, [props.mode])

    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [year, setYear] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [category, setCategory] = useState<number>(0);
    const [brand, setBrand] = useState<number>(0);
    const [group, setGroup] = useState<number[]>([]);
    const [upperNotes, setUpperNotes] = useState<number[]>([])
    const [middleNotes, setMiddleNotes] = useState<number[]>([])
    const [bottomNotes, setBottomNotes] = useState<number[]>([])
    const [isPopular, setIsPopular] = useState<boolean>(false);
    const [isForOrder, setIsForOrder] = useState<boolean>(false);
    const [prices, setPrices] = useState<{volumeId: number, priceValue: number}[]>([]);

    const handleSelectBrand = (e: any) => { setBrand(Number(e.value)) }
    const handleSelectCategory = (e: any) => { setCategory(Number(e.value)) } 
    const handleSelectAromaGroups = (e: any) => { setGroup((e as any[]).map((item) => { return Number(item.value) })) }
    const handleSelectUpperNotes = (e: any) => { setUpperNotes((e as any[]).map((item) => { return Number(item.value) })) } 
    const handleSelectMiddleNotes = (e: any) => { setMiddleNotes((e as any[]).map((item) => { return Number(item.value) })) } 
    const handleSelectBottomNotes = (e: any) => { setBottomNotes((e as any[]).map((item) => { return Number(item.value) })) }
    const handleChangeName = (value: string) => { setName(value) }
    const handleChangeDescription = (value: string) => { setDescription(value) }
    const handleChangeYear = (value: string) => { setYear(value) }
    const handleChangeCountry = (value: string) => { setCountry(value) }
    const handleSetPopular = () => { setIsPopular(!isPopular) }
    const handleSetForOrder = () => { setIsForOrder(!isForOrder) }

    const handleSetPrice = (volumeId: number, priceValue: number) => {
        if(prices.length > 0) {
            var flag: boolean = false;

            prices.map((item) => {
                if(item.volumeId == volumeId) { flag = true }
            })

            if(flag) {
                let tempArr: {volumeId: number, priceValue: number}[] = [];
                prices.map((item) => {
                    if(item.volumeId === volumeId) { 
                        item.priceValue = priceValue 
                    }
                    tempArr.push(item);
                })
                setPrices(tempArr);
            } else {
                setPrices((prev) => [...prev, {volumeId: volumeId, priceValue: priceValue}])
            }
        } else {
            setPrices([{volumeId: volumeId, priceValue: priceValue}]);
        }
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('country', country);
        formData.append('year', year);
        formData.append('brand', brand.toString());
        formData.append('category', category.toString());
        if(file) formData.append('file', file);
        formData.append('isPopular', String(isPopular));
        formData.append('isForOrder', String(isForOrder));
        Object.entries(group).map((item) => {
            formData.append(`groups[${item[0]}]`, JSON.stringify(item[1]))
        })
        Object.entries(upperNotes).map((item) => {
            formData.append(`upperNotes[${item[0]}]`, JSON.stringify(item[1]))
        })
        Object.entries(middleNotes).map((item) => {
            formData.append(`middleNotes[${item[0]}]`, JSON.stringify(item[1]))
        })
        Object.entries(bottomNotes).map((item) => {
            formData.append(`bottomNotes[${item[0]}]`, JSON.stringify(item[1]))
        })
        if(prices) {
            Object.entries(prices).map((item) => {
                formData.append(`Prices[${item[0]}]`, JSON.stringify(item[1]))
            })
        }

        await createProduct(formData);
    }

    return <>
        <div className={styles.editorWrapper}>
            <div className={styles.dataHeader}>
                <div style={{display:'flex', gap: '1rem'}}>
                    <Form.Check
                        type="checkbox"
                        id={`default-popular`}
                        label='Популярный'
                        checked={isPopular}
                        onChange={handleSetPopular}
                    />
                    <Form.Check
                        type="checkbox"
                        id={`default-forOrder`}
                        label='Под заказ'
                        checked={isForOrder}
                        onChange={handleSetForOrder}
                    />
                </div>
                <div className={styles.activeButtonsGroup}>
                    <Button onClick={handleSubmit}>Сохранить изменения</Button>
                    <Button onClick={handleLeaveWithoutSaving}>Выйти без сохранения</Button>
                </div>
            </div>
            <div className={styles.mainDataProductWrapper}>
                <div className={styles.blockHeader}>Общая информация</div>
                <div className={styles.dataWrapper}>
                    <div className={styles.inputGroupBlock}>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Наименование</Form.Label>
                            <Form.Control onChange={(e) => handleChangeName(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="form.yearInput">
                            <Form.Label className={styles.zxzczv}>Год</Form.Label>
                            <Form.Control onChange={(e) => handleChangeYear(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="form.countryInput">
                            <Form.Label className={styles.zxzczv}>Страна</Form.Label>
                            <Form.Control onChange={(e) => handleChangeCountry(e.target.value)} type="text" />
                        </Form.Group>
                        <Form.Group controlId="form.category">
                            <Form.Label className={styles.zxzczv}>Категория</Form.Label>
                            <Select 
                                placeholder=''
                                options={categoryOptions}
                                onChange={(e) => handleSelectCategory(e)} 
                            />
                        </Form.Group>
                        <Form.Group controlId="form.brand">
                            <Form.Label className={styles.zxzczv}>Бренд</Form.Label>
                            <Select 
                                placeholder=''
                                onChange={(e) => handleSelectBrand(e)}
                                options={brandOptions} 
                            />
                        </Form.Group>
                        <Form.Group controlId="form.group">
                            <Form.Label className={styles.zxzczv}>Группа ароматов</Form.Label>
                            <Select 
                                placeholder=''
                                isMulti
                                options={aromaGroupOptions} 
                                onChange={handleSelectAromaGroups}
                            />
                        </Form.Group>
                    </div>
                    <div className={styles.inputGroupBlock}>
                        <Form.Group controlId="form.uppernote">
                            <Form.Label className={styles.zxzczv}>Верхние ноты</Form.Label>
                            <Select 
                                placeholder=''
                                isMulti
                                options={upperNotesOptions}
                                onChange={handleSelectUpperNotes}
                            />
                        </Form.Group>
                        <Form.Group controlId="form.basenote">
                            <Form.Label className={styles.zxzczv}>Базовые ноты</Form.Label>
                            <Select 
                                placeholder=''
                                isMulti
                                options={middleNotesOptions} 
                                onChange={handleSelectMiddleNotes}
                            />
                        </Form.Group>
                        <Form.Group controlId="form.bottombotes">
                            <Form.Label className={styles.zxzczv}>Нижние ноты</Form.Label>
                            <Select 
                                placeholder=''
                                isMulti
                                options={bottomNotesOptions} 
                                onChange={handleSelectBottomNotes}
                            />
                        </Form.Group>
                        <Form.Group controlId="form.description">
                            <Form.Label className={styles.zxzczv}>Описание</Form.Label>
                            <Form.Control onChange={(e) => handleChangeDescription(e.target.value)} as='textarea' />
                        </Form.Group>
                    </div>
                    <div className={styles.inputGroupBlock}>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Цена за 2 мл</Form.Label>
                            <Form.Control disabled={isForOrder} onChange={(e) => handleSetPrice(1, Number(e.target.value))} type="number" />
                        </Form.Group>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Цена за 5 мл</Form.Label>
                            <Form.Control disabled={isForOrder} onChange={(e) => handleSetPrice(2, Number(e.target.value))} type="number" />
                        </Form.Group>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Цена за 8 мл</Form.Label>
                            <Form.Control disabled={isForOrder} onChange={(e) => handleSetPrice(3, Number(e.target.value))} type="number" />
                        </Form.Group>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Цена за 10 мл</Form.Label>
                            <Form.Control disabled={isForOrder} onChange={(e) => handleSetPrice(4, Number(e.target.value))} type="number" />
                        </Form.Group>
                        <Form.Group controlId="form.nameInput">
                            <Form.Label className={styles.zxzczv}>Цена за 15 мл</Form.Label>
                            <Form.Control disabled={isForOrder} onChange={(e) => handleSetPrice(5, Number(e.target.value))} type="number" />
                        </Form.Group>
                    </div>
                    <div className={styles.inputGroupImageBlock}>
                        <div 
                            className={styles.uploadedImage}
                            style={file ? {
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                                backgroundSize: 'cover'
                            } : {}}
                        ></div>
                        <input
                            type='file'
                            ref={uploadRef}
                            onChange={(e) => handleSetFile(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ProductEditorScreen;