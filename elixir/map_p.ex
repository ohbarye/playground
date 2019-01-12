defimpl String.Chars, for: Map do
  def to_string(map) do
    case Enum.count(map) do
      0 -> "blank-map" # 要素数が0の時はblank-mapと表示
      _ -> inspect map # 要素数が1以上の時はinspectする
    end
  end
end

