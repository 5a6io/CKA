# 🍨 Section12 - Helm Basics

## Lab:Installing Helm

1. controlplane node 위에 helm 패키지 설치

    [bookmark](https://helm.sh/docs/intro/install/#from-script)

2. helm이 설치됨. 클러스터 내 helm version 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/c9bdd932-487b-48fe-a79d-59ac5065d76a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DH5P5G%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFqRgmPs7b0HM9mghtdFjaE3Aa4aWkdJUpCQqeuK9Q6AIhANtSvINUEcvZg5fgr9P%2BEO5AYxMy5pKTucxQWq7w9rtsKv8DCBcQABoMNjM3NDIzMTgzODA1IgwWOSwMMTtJ5cLeLHsq3AOjnZ9%2FcLRs1SLJZtGsYnmwrBMmaWmJEIo%2BifZdTc9Q%2BJDFRIBm9YI%2F8fk3sfH2FMKVwidWLm8%2BnI3BVBPlBWkA42kDN93srlBRfaFySpNTUCMJQ3MFaCj0%2BkebGjug7FCW31hyCt%2FkU4OeWohhOiz%2FHwUwsc%2FKFhQgJbqF823i1ZzeglkkdSvAZHric9kFWjXHhXRXMDWi365Ltt7kgDzjm%2Bb7XlmZ8%2F3Qwz8hxBY04Mh%2FJ%2B2iFmNTtdqvDQ9YzOcBVE4cS3RtxNTbaoGU9X%2Bi86qrZIJC1VtZErliEGXsjHpPcNqJodvTAXwL2ObrImyJo1OPVYfOPyRKoyeQy8kdThPnEFeODmy0INlwjt%2FBUiIG1KPURYOP7Ux4iekWQdkQ4dsIXQZLOG%2FRlkSe5CPnt1V6oc1Hg%2B%2FyT0C4%2Bo9IZUyiTixc6ZmB7IsOuh3YbvFisPi%2FtOdedpSoclagwN%2FASFs8E4duv7zBaddsL9c71xEZLJy3iV6lVXcWgFX3qgKjM41kGFf3UjtUrWFY8Gb2Hy%2Bha2dm8d6Dx44UWo64K5z73s0yeQEZhf9LyoeRwJ6KYy%2BHFsMp61FAjUcmGC8tErTtcz0IZoUxv55CtbYN3xI6v9aqEVMnCdrwzTD65Iq%2FBjqkATrrdQks4RZIhoglQ0iDSY2LVPG%2BKEjq3u5PbZbisUEVwFqWA0um3S1zf13k2ddPMZhsheHIkaGEsno5Zo2VvkHJk9mrkfsi4aksO%2FWTdsqXp2EUWW5qeMis%2BLVisDpnazsNMSy0UCxj5Qk9mRDBdxG8ppxCo5JWaY6IQtgzpx7%2FBcL3r0%2F5yS5wmNVVzw3TCwB0XtSO0BZak23TGbK35qSFXN9%2F&X-Amz-Signature=756aeb89ce8a56632baf0e867bf365c7215a25d44c7be3acd15f7f3b751efab1&X-Amz-SignedHeaders=host&x-id=GetObject)

3. helm이 Debug 모드에서 실행 중인지 여부를 나타내는 데 사용할 수 있는 환경 변수는 무엇인가?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/69ca795c-9f38-4d08-ab29-52d6ec8dfe45/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJAVVDX6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbp7HaFCKD7rU6cvQT0uS4mZXbhHPPh1GG01yB0Q3wyAiApqvCTcJySn6VnqouCSwVsGozQJPEk%2Bqaot1y1W6uAwyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMWKEx8iLdSbRqSDXZKtwD%2FY%2BygIbMAD8ynz0vS8q2fSAT%2F05asjbidXqScg9W5Mh7UFr%2BM2bmeswAmKQItH5cF8HJZ8Syplf3btm5Siy%2FIm6hM3QtnN%2FNdWqaxGiRHEVeIb8S2mvbMQV4k0jPTAnuCV8jXz%2BRy%2FaU1Ug4%2FKkipYGtS6KmQzmPt4VSmJBXrMCMjfGn6tlaqzBGTr8J%2FbZw16QrZRBquuXeXuFvOHd%2B4FNrdzQToFklRRIfEPAMUx6T2sIE9oe38N5N3iWG7DJlc8%2F8sebjr5rKDizQUpsb4musDKsNSHc05IDTGpJDrvFjkz1zRTX%2BlR9hr7qPheSwXeV5ZQuUcOux9pFxhVaY8zLlg6H230XuoAImJLABmCDUblnBZF7TCsi4q0yDA5RyjPEYwv8tqlq%2F3RBQJ8pTHBLqLRAbmDUtZrGHwV7OW9UQaJJxm6uIFgaO8h4os6emoOBJy41W1l4nVfTaQnnfJVjI7GYjxXvW0JXKjfgDkGa6mmf3Ut8e5zw6TfAN4sAqP6Uhm08HGo1xEG63wp%2BL4Z5DBw09jzEWl3Hq2UOmI%2Bf9dC3i2O65vwSSSiUzTZR5qSQuGM2VRGim5F2MXemNVyxXANW0jH25cxLHBkPFEkE34neIbfCuzOqB0BYwleWKvwY6pgEFYghMLbTODDab%2FpEtsm8RTpapAL8fxQ2jxkfxICOgN6LKcJsfyIui%2BSwsPVHmwLmDC7ZREAZpRmQfMVUetXvt%2FLSRlnYLfjpLppj%2BldVqetOo7VV%2BUC4jcDOP7EhZofH9MGd6IX%2BClXDTyOYOVG%2FtBT4sD5qDWHmz4qVHiGSRZJq0dGgegzuNiV%2B1pgTa%2BRmDpzExNmKaJFIzCLGiX%2FiMpVyv%2FKFa&X-Amz-Signature=f1c00226445fd04a60936d4640f84c577fa4e7f590f104989068a8ce7dcd2dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

4. 장황한 출력을 가능하게 하는 데 사용할 수 있는 명령줄 플래그는 무엇인가?

    `--debug`

5. `helm get` 명령어와 사용할 수 있는 subcommnad가 아닌 것은?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8b4d92de-2e0c-42f2-8ca2-402d161402a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRDTM2PH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTDDM4FbfA7MJSaQHP08g%2BBt2CxwpC4U3ykjTW54gR2AiA2rHJTGR1soGTs84Xwlt1LI2MQqZxh5q0NaW0uaMEMByr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMBQBkeH9oj9cEPsIZKtwDZoeSttGtu16A8id%2Fu%2B41KPMn9UgN%2B82XluqsLtFNQuR5Xv9IZAbilMB6nKP%2B7g5v%2FWZc%2FRunCOpbyxFAScNTOw8Lig2PIe34O9mxikwlfksH67CotzkCNibHaErBdkRyBEjkIgkdEEZZ%2F9yMkRUBfa6Ln2EJlURr05l%2Bb2mzuirqHd30PL8Lg%2FkAG1wc56vuBqg8Yl4cmXAWinapqQdgWcpAIoNRWcNzeaebuheAUMfzE28hMcNmcrDG35WfDoQP0hcA3KNiUWvvsbqx0zzEHLaxBzw%2Ftt0d6KmmWvXnJymmr7qEkSn8tlWXMqfHpJpZgZ6h6Jy4WBFPPvErE4bHTC9yzT7cIklnUDSW0AzmdHCjN59CThofV22XYrZVcwsm%2BiA2KTY5cYupH5%2Bx9u8uEHYY2DfeoZBUWIcSyHR26UJHAD8QExjhHUIyejd5YbngM6Sr%2FA4q6rGp3Z%2B2%2BiCUnPi2hS0YBxN8rv0OtfSoSItJeJ8m4k%2FhSxgOewAXnOkSsSIXWN7b%2BIa2Yx4loIzWq1e2h0C5jM%2Bzzv7YUnt17%2FsPWsuoqLnUWzeyZIyk5DcF%2BBEeA4y6m%2BWVt6rUxUxa%2F2gioP56HceJ1Bj9u4M9P8mZXELxil8fJ28Mdc4w0OSKvwY6pgF1xy9E9CLfKnC61Iy18mwIpndnf0pWHFx7z2Lmi%2FGzfGwfJEKY75YJWZpqXBkliD%2FkvXA%2F2AIbbGl9B89lSrugFeQlH0HIjwgcM%2B4W0SY1waEvp62Ng%2BVK%2BlZZHsftUGdUZ0NvGtZiZDkAmtMhW0oHtrNAIXfRIkO3JL4brXOsR52Bs6ebTUdCpJmo4NdNQ2AukMRVeJYKDyslT3vFHFv%2BE27awvAS&X-Amz-Signature=3b453e94a70218ac2f1022ba50ff40601b59879ccc85a430d63d57d653bc62df&X-Amz-SignedHeaders=host&x-id=GetObject)


## Lab:using Helm to deploy a chart

1. kubernetes 클러스터 내에서 애플리케이션, 도구 또는 서비스를 실행하는 데 필요한 모든 리소스 정의를 포함하는 helm package로 알려져 있음.

    chart

2. 같은 kubernetes 클러스터 위에 여러 번 같은 chart를 설치할 수 없음. False
3. Artifact Hub로부터 helm chart 패키지 wordpress를 찾기 위해 사용되는 명령어는?

    ```yaml
    helm search hub wordpress
    ```

4. Artifact hub로부터 consul helm chart 패키지를 찾고 Official HashiCorp Consul Chart에 대한 API  VERSION을 확인

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/930692cd-425e-4e23-9c1b-928f9f1e131a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6GABVKH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEs6KXP6ft8P%2BV1tXot5G33o2cIIyedGxND5PH369l8QIgA%2FbmnfLFTbsH0%2BPOnAxTxtDyZYkJzMcMKlrcDgiE7coq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDAdW6Vy4FjjmX4GonyrcAyCL2Ecsi9kIgXtZyTJlxJdG24DXIQ2710gB4UVz1fwJlBHMCrM9LmeFS1%2FJWBDcWHRpjI2z1SVJN9y2QLxWsIczkaqyHM%2B%2BKT%2BacU7fUiitpARyzUcA080bnk29%2BvAd9HXCTVwnTWScsBVyL86qctdkibdD%2Bl47CM7Xhw9jbu1JPpoOwXEhPgh55Td%2BkDMQDdnRxG%2FSeJLJPIwoFRdQf6XeX%2FoT6PdC1UxuCkJxbUUNcCdkfmp0HbHO3jQXPxj%2BjuHqcJ9W2HrIl7LQFSPCKvf17ATGIOPFN%2BnOiuIrWxwPz0T%2BbFwJkJDv61pRqpk2BkEXLkeRNiCqxGuJbwFLFmZOIJG0YuK8wqbidr6LDrBpp0%2FGlkdlbhfAVZqtBQ7wkerLB37lkX5ypT9fL6otQZolST2FuRpkpkWO2J0ehN%2BCbHIuuyk65BsSFhSSHxZvcvwBjAkYqexmh3jqxrR0cj%2B4OjDjA2eldHk9Xc0sbDllNBUHeQGquJg91nX3TXp6KmSOx3FszfN3bnp689MOS7Bu9Q%2FGlHJW7Gw%2FSVyAMot9Vi9o5CIkr26pW2FVB6XNvugLr95gzCRcv3eB%2Fg2k8v16pwMSDFtu4gX%2Bo7n1%2FDYcldlbTYC9ym1btiVvMNLkir8GOqUB%2BvNDwknTq%2BdEP6nc80GtwT7qaqHotPJ9mPNAB03liTJsZ%2F8fLZLwNQ%2FnulYFB5pMIRxAthvKa%2BPl5ZIGEmF%2FvXFjEQCJmRDAC9iQGeQwjYslzM%2F7%2F0Z48eT6xgnX%2B8Av3uHKWpMkK7aKZTjw4dLy%2Fvb6PPQgw8MijaG3FjPoeTsxxMwCxk83YhWQyCxh5R3rzcTV8dq8%2BStRas%2BLu%2F%2FoK7O7twls&X-Amz-Signature=ec818a089658a4bf44cb6a0eec5f8b805874571bc98a98ccd3a650c2be090cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

5. controlplane node에 bitnami helm chart repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

6. 새로 추가된 bitnami repository로부터 wordpress 패키지를 찾기 위해 사용된 명령어는?

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/048cc660-48fe-40f7-9e95-b0f2f327e878/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPRWZ2GO%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB4q7RR4gZGxK4MMD0ZQj596sUmkHTnj5WbbW9OVZV91AiEAzqj8r3vYN2Ocr3DA5AAAd8BcgYE6hIelJHkmgPO%2BcuQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDIWTqgmV6ijL%2FLOQISrcA5lPx3acKfItskG33ALljS6c8go8qFaZSw9Os7qpis0HbKctAQOcisdIG7a5tmcan3slidL4Tqv6Eej3Xtpu1M8HTmpUlFAcT5REyTn5u7Uyo3Zr751qtgpc99lFztohDX8MmzkI4L%2F49Mt53aSLdEjZe2jG8D%2BX1D7TK5bqRvCCKLrB89Lp%2BtzumZx%2FZ0YInoUJZiykF1pHlQGOvx2UHGh9Q8Y0Nrz0SWt0ju8EOSnAhp6Z1Lq0Jh24huTfDOPD%2FzBCs%2BPMj1eBZ5Jp2P2Z9pCFPuxf6EK2HiU5Kr31EO5shblZnN3ixMQPXB9SeGBHdlYZpSlKpIL12K2gGLe%2BEts2zQ5%2FyYkyyitXQzYrfL2WTYW1%2F0dNLGQsezaasFF4XCtPB6wf9uBHOHwUgSns9NrkfhMWVgrOicclSM1cRkRfYzuKZ3tYkyVKSdUYZjMh8qbhwaUIw27NIfSTAKmMk0%2FsR5QOnJ9isdi6VNfBzQcHpxnMiA8qx5W9ik%2BgQVOrRNHps2Gygs%2FisOmnfK1Q7bb4OYIOnFeigoYaZgZPAa6mnIFeg8x7wUtbUKjJ4fzSPioWl7JUmbgDukIc1%2BZIf7Vd9xKfycpD6fMUOlR0RbWF8daym%2FQYP88ITYWeMJXlir8GOqUBOKbxDjEOR%2BbGsWji6jqjnivmfVCNm6YojNJm0icEAK17gI3RWFs6kMZqkvh3TEE3i5naD5dj8eQs18Nni8DZbyu23ntNu4Ihs%2BgVNmudL5z0ozuAQfPsepf1kkudWvjRYoGIyYRjxORao0z%2B00sY4hfL%2FUAghFdTx3ZT4n94zXynN62gA6pBHAsJgKAjKKR%2BHZAVrxlM44W8DW8gHoaWenrYUYJG&X-Amz-Signature=510352096f872982347423a2d9ce3f15b2e08032944c9983f432d96599fd26b3&X-Amz-SignedHeaders=host&x-id=GetObject)

7. controlplane node에 helm chart repositories 수
8. bitnami repository로부터 apache를 사용하여 클러스터에 Apache 애플리케이션 배포

    ```yaml
    helm install amaze-surf bitnami/apache
    ```

9. helm chart를 사용하여 클러스터에 설치된 apache 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/e38adf70-0b48-42cc-9fc1-c4beff4e690a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJWN4MAB%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCVDg2wVzAHcCq8aQ8samNjnMv4AMulVpQ6AMLpzhXaQIgP%2BkvRRjYkYIrhj4jb0os0h0y3k%2FxrbK8HiQGf6Wloagq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNodaCxcvM9A%2BgausCrcA%2BmAA790Ik%2B%2BurFkMgoWiPt0w21y9b36zGSBgHgRSB12jgGrmjwAN1MoWT0fw3CIbXm8qMzKkUmB5ysnCyjFXmXdPzuhasYksNotmJC87edU3fYDgR11XKGrCcxg0YtuizKQMSMq3OR6PmJRP1lTzcdGDlrhmfBfxSpePFZ4qZn9k3PpHS2mO1FYSvRd6TnDwQfl4eAIbVwngVc9bUWITThmGONKgS3jt4aQ4JRzjqEPiaT2YGohYc7C96O9%2B%2Bu9GUxt2Z2qaR5aMgM2%2Bx891fM36FwR8pMhqQw7RXmPiCS%2Fr27p%2Fhwo%2B3XQ8c%2FUt2SWCMjvXHcWmoIZUE6YFFkgq0Cwvw2D9n%2BKo5rXF3bGBEII2bcL3LtT5TKsCSCNBrpCAHyW45%2F2nrcCfhGf8NFGIkImbrTm8%2FTKk7Ojhq9yRB0b%2BKEbgeJ1vVKWwNjjp4sg4knQrUEh0VzEPXW3pPMCEgm%2FfKJIrSlk%2F0nyU4Qui4I8HeDzN8MFpFwuuf74SvPGhUbhwdpe6NoTga3klVgK08QM%2FMTDi7B7%2B7VsTNbLqZTCZstduk1e2npHw%2Fvn%2Buuf5PKH2kxt1CJKFfX4yEAJ0VX%2B3%2BgnVNL4M%2B%2BYNAfm8dns3M3rSkcl2dostRzLMJTlir8GOqUBAkpVIX3uG%2BPfprnOvSx1xImDbdCMOn%2Bh2D8JgZYBJFBpU0qOwhdWjPw%2F8jZ7Wp9p4Z38bMyEKesewr4kD%2FPg%2F9tmNoAi5%2F9EAeS0i79Ldn8CKcoic1np%2BBKvKwBGqQEufELrHdSr4W0FvU1vkTbBQDktXi1KJD%2Fa0A9apwZFZDYw6GsI2cM3SaLlHQNJ37qF5vvKjrNKmIAg2bYzLeVVS4B2%2FoFI&X-Amz-Signature=5201ba54380aea46c6ccf96df1a5ff2b0fc0f3852fa8c9b3096ae6c5c5197420&X-Amz-SignedHeaders=host&x-id=GetObject)

10. 현재 클러스터에 설치된 nginx chart release 수

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/8388808b-1d20-480f-ba99-2276eda3aeec/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMNP2HV%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwPlOpFiYQCkCs1pTJIHY07501DzBuwAeG7lPXafIWpAiA0pfqREgXDA9O0kxQ6kUWWdFu2WAtGDz4sj%2BCd9OYOmyr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMw8XTnUmY2YIJ2BvsKtwDYpmWwUvN0qMyrANZOHxm9kbi9iePt5AK6YngpQ3lwGG%2Fdo0kuiPhC1LrURIB%2B6Yoxo%2FFfhJAU62p3uH35W1pWzjbMKYMKu%2FL5zbah43WGnnOxTr%2BcQYfi4S1aKtvbFWbsq8p6EsQZKwQY9tAisweMa%2BQ6OAsiDEFeRHZLP%2BytWcYYjwt8zm7OtBB2vnBoOB82bom1mkSmi2H3AjXGkENrmnshCBxcqDa0CuXPk5VxwLN1nKAbKD99cye9aNwkaVolQPX%2FGncekEzhegxfBdHKwMettuYddFDbbzeKf9DNjY8Er2CGxt7%2Fr9AkCJTqUVFCmy62fluCAKmLboOJiv%2BzKd9b7xy1ModMHSPUW8tcGAqcVDIzT2B2JMDk7mwD%2BSqLxJH9fetdwpZwAYr1EQTLIfNlnQLMDk%2BnMbr14qaEic2qZVdhXYZ4%2FqLi9VICzkrICDiArGzWYJFnEBie6%2BrJsrf0G23%2F%2F3B7fnVc3PyflSPPosPstLmonHluVDpASHroMuO48AI9c5q2UxWxfqxH9MX4e8luqACN4W69eJ2dKWzqiw29X%2BiyxD%2FocYRGkLSLf0DvC8c8vt9i%2BHTC2Ce%2BKoQuFaugtVoJ%2FB2vH37g4l%2F5VC7W3zNywYA7SYw0OSKvwY6pgEehTM%2FU71vGWZjGDSe5pZi36CIbAlY3a029ZQPf%2BC4C8CROqova0%2ByIaPOq4C6AaoMttCgaMCpRuSonHFg4TxlmrfdOnt%2FFLcRv%2FWdOv3HY8VELrKe%2FYut0DYauzXpj6AOjmjFxmuG4nmaikpxPhJp8en1EQZixUDGk8F0ycuUuCgMH9n%2FIu85LzvhJXlhbFH8ajDUMoKe9cydEpBbLLjAMr35HRKp&X-Amz-Signature=45917fdc523093d61e8cfb1e4970c0cc98effd595761eeab036452646260a814&X-Amz-SignedHeaders=host&x-id=GetObject)

11. 클러스터에서 nginx chart release happy-browse를 제거

    ```yaml
    helm uninstall happy-browse
    ```

12. 클러스터에서 Hashicorp helm repository 제거

    ```yaml
    helm repo remove hashicorp
    ```


## Lab:upgrading a helm chart

1. 클러스터에 bitnami helm repository 추가

    ```yaml
    helm repo add bitnami https://charts.bitnami.com/bitnami
    ```

2. 현재 클러스터 내에 nginx의  release 수
3. 클러스터에 존재하는 nginx의 수정본 수 ➡️ 3
4. 클러스터에서 현재 실행 중인 nginx의 version

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/b455502b-e813-41c9-a31d-758acd7b6fc1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZNHJ6N2%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMEtYtRR7gMr62zhoavtt6D%2FEEJIoabLoHetzHkgbhcAiEAifzznGfMDPa4W6Jy%2B%2BrOtK6ydnTXLq9CXn2lsbTOZasq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDJ%2Bt%2FmubnzMlbi%2FWkSrcAwsXeSeaAGwyA5Hg4aTaqYJm8ezVgMqH3%2FXVEaQg6w%2BnDk8BmrJU4pfYLVCaI5qwm0jePH32KBx1XMDfk1Xg%2FyynBLW83IikN7GJGwZtq1xerlbulyamVIP9Du8SWfQKNF6ASS5YRW%2BkBKsU2t70pu4Y9qDITIitL8VIri9VnmBn2wY52xUrLlChgmK%2BLiYE0T4pKDh1ZB6Yrzw70u3KkEAkNuAMKaId%2FRdfikinrk8HD8jkvpqLSsJgPgrvLsocz6ktQ5zPHgQf2sec%2BjvkrIXAaSd%2BqwtX5OxtTKQBAywR61EXfzhSvovxN%2FwyA2lOlYltcNzMF08h8a73tcYKGA7rq3fg07wbs1%2F0mYv1OSsNwXXvScM92M9uzjXMK0zDzAKIxak3JGOOCGyPde6Xm08%2F4p8hY5NmACfuE7h87go0Tvc91BMVW1Iuw7MNNF4D7N8yqN0nQhivCVbEtedou%2Fefzbky1bV9JTdASQg%2BR5Oh8WLI3W1qNwwKwHq8cjfGGSs8rkXpGIb956q9jID3SCDlU15ehRd9egsm%2FJDXwuz1%2FRkDvWNtQMubobqQp7RuxNaUbs9iSchO7aWvNpnTTKXaRB1aJHzck4sb7VjPpfFHzmNkHlFkJS39%2Fv8rMIzlir8GOqUBDbXaMVzkzsocHXthsnw7Uto9V7xi5D8iwtSFyqhtixhQh6E8tuszlPk1zX8Ja9wih6NTWAnVZsbT%2BjQUikup1OBL4u2oO319UBnjG%2FVLi7wuCjvkDSl6HpUSMKNweGxVnuqUZCdudlPpbkXhp2Uyg0wdoWYm35hX0xYhTu%2FMTBbtngOhp39Yl21rfsTAKlwjwMamnqhAy02uOyUpiViZp5SECOub&X-Amz-Signature=62648f51eff04e449a25306e1ab3cf7ac2232781dc05904f8a25eead65969153&X-Amz-SignedHeaders=host&x-id=GetObject)

5. DevOps 팀이 nginx버전을 1.27.x로 업그레이드하기로 함. bitnami repository에서 helm chart verion 18.3.6 사용.

    ```yaml
    helm upgrade --install dazzling-web bitnami/nginx --version 18.3.6
    ```

6. 현재 업그레이드 된 nginx 버전

    ![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/b2ea2032-00e9-4883-a13b-cb03cf5b2334/f7b287a2-6476-42d1-97ee-a1845c92fe99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2O7566D%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFBTspWuZ0n%2BPPLljQATG17da5dS4O%2BmwSurD89A19LtAiEAl2bE1T08%2Bdh7fdZJ%2B9lzbZUGHaEUGsZ6Tc%2BpN0B4rtsq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDN%2B3m0D19JmF9eSJoCrcA8oL2RnE2S7olyqCn3ymiXPVhvquMMlNc3QzXI1hCFaa7LIka0t8PFL7Z5AC%2B5zO3tmZCTraN4yh1gLBU4ywjNRLTJJJKlvCh5UEBUyo%2Fid2frGfEjU5zW3CJYmZy3Z6LR3kL5ZR4%2BeX9gRAQjNN3i1WV6u8fwNYBKqz6nBvcJw8CTyzpF4lDdF5P4aUY0PgfrEsHzamp4ycAymqW6XWC8Jt84jynNyjDSeTN%2Fi69zq5dKYiYv4UQqAGEDf9nF3WL8Sul4mefkkqimU4j2tLK2T%2BD4M7RNvY49O1UdOgQXnnIoT4peXfPh%2F4rBmIH9DLqUJaF2dSm88jYtSCAhq4VS%2FsMngLykF7Yg4rl6g6xo1U4CxSPbSZRG4VA7L9qudEfkmrjIIQ7lC%2BL3kr964BRIlSZN1TWlsMyD3vyw8Zkynttksenj2A7FrzjKZ4acT35OYedJApfMRpYZjxI3IHFM2%2FhBQNyUjLUZK2XSrAO9EhUIXJr3LSeZuerdEq6VdWr%2Fzl3RYgT4UhtAE68557rI%2BLPorjjQVJSa1DcrB2UETIZes3%2BiSe3mSaIKxxefBqGo2GGB0inq3tWdS0NiFSq2u26lnbsu5pk7h4vKwLqQsA02eYtelfpJBlpUvKMJnlir8GOqUBvHXlEBV6P%2Fw0EjekzSlRJ%2FbVhtfYHQLA%2Fu6GaJBdrq1P%2FidMUS3KrQl16X1h2LL3vNdS%2F%2FzCVVPaghid9Ji8gVRkH4NMLIuC0P94EqdL6nyCA8xh1iDAH7VdDJ0nha50STcW0%2F4bihDTIiuJSxOqwQXSz5s4qlHgzMP8I%2F2AfEyh3T15KtX2vZEIgTXFtbY4MkPZeNaTgCm%2B0rxBw8lnj2ANlBRe&X-Amz-Signature=6e3758a4cf2cba6cdac88a4e05c36f8278b3989288a645fc83db428b1ee7aeb9&X-Amz-SignedHeaders=host&x-id=GetObject)

7. web site에 문제 발생. 이전 버전으로 nginx rollback

    ```yaml
    helm rollback dazzling-web 2
    ```


    helm history <release name>을 사용하여 REVISION 값을 알아낼 수 있음.

