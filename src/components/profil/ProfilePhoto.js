import React, { useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import EmploymentDetail from './EmploymentDetail';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

 export default function BasicInfo(props) {
 return (
       <div className="row">
           <div className="col-12 bg_img p-4">
               <EditOutlined className="float-right White" />
               <div className="row col-12">
                   <div className="col-md-7 col-12 px-0 ">                    
                       <div className="row mr-0 py-auto ">
                           <div className="col-12 col-md-4 col-lg-3 d-block pl-0 my-auto">
   
                               <ImgCrop rotate>
                                    <Upload
                                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                      listType="picture"
                                      maxCount={1}
                                     >
                                     <EditOutlined />
                                    </Upload>
                               </ImgCrop>
                           </div>

                      </div>
                   </div>
                </div>
            </div>
         </div>
       );
   