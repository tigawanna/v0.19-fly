## deploying to fly.io

Add a [Dockerfile](Dockerfile)

run 
```sh
fly launch
```
![fly launch](https://user-images.githubusercontent.com/72096712/213918321-0253f043-4f65-4838-a8f8-bf0d4c0c4814.png)

then add this to the fly.toml

```toml
[mounts]
  destination = "/pb/pb_data"
  source = "pb_data"
```



then you can run 
```sh 
fly deploy 
```
if it takes too long you can configure docker locally and use
```sh
fly deploy --local-only 
```
![fly_deploy](https://user-images.githubusercontent.com/72096712/213918782-fffdb8f0-1f55-4080-be46-22c9e2e110c3.png)
