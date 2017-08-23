(ns your.domain.hello-world
  (:gen-class))

(import is.tagomor.woothee.Classifier)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println  (Classifier/parse "Hello, World!")))
