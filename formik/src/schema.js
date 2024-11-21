import * as yup from "yup";

//1 büyük harf
//1 küçük harf
//1 sayı
//1 özel karakter
//min 5 karakter

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";

//Validation seamasin formdaki inputlarin gecerli olmasi icin tanimladigimiz yapi

export const schema = yup.object().shape({
  //email icin zorunluulklari belirle

  email: yup
    .string()
    .email("Geçerli bir mail formatı giriniz")
    .required("Zorunlu alan"),

  //yaş için zorunluluklar

  age: yup
    .number()
    .min(18, "Yaşınız 18 den küçük olamaz ")
    .max(100, "Yaşınız 100 den büyük olamaz")
    .integer("Yaşınız tam sayı olmalı")
    .required("Zorunlu alan"),

  //şifre için zorunluluklar

  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalı")
    //Şifreyi regex deki kurallara uygun mu kontrol eder
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Zorunlu Alan"),

  //Şifre onay için zorunluluklar
  confirmPassword: yup
    .string()
    //oneOf ınputtaki veriyi verdiğimiz dizilerdeki verilerden en az biriyle eşleşiyormu diye kontol eder
    //yup.ref input alanalarındaki verilere erişmeye yarar
    //!yani şifre alanındaki veriye eşit mi onu kontrol et
    .oneOf([yup.ref("password")], 'Onay şifreniz doğru değil' )
    .required("Zorunlu Alan"),
});
